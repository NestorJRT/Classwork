import express from 'express'
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
// const express = require('express');
import { connectDB } from './config/db.js';
import { creatUser, finsdUser, findUsers } from "./services/user-service.js";

const projectDir = dirname(fileURLToPath(import.meta.url));
const envPath = join(projectDir, '.env');
if (existsSync(envPath)) {
  process.loadEnvFile(envPath);
}

const app = express()
app.use(express.json()); // Middleware

const PORT = process.env.PORT || 3000;
const dbUser = encodeURIComponent(process.env.DB_USER || '');
const dbPass = encodeURIComponent(process.env.DB_PASSWORD || '');
const dbName = 'bdays';

if (!dbUser || !dbPass) {
  throw new Error('Set DB_USER and DB_PASSWORD in express-test/.env before starting the app.');
}

const initiatives = [];

const mongoUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.4viiniw.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const scientists = [
    { id: 1, name: "Dr. Elena Rostova", department: "Climate", projects: 4 },
    { id: 2, name: "Prof. Marcus Vance", department: "Oceanography", projects: 2 },
    { id: 3, name: "Dr. Aisha Khan", department: "Climate", projects: 7 }
];

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; padding: 20px;">
    <h1>SustainHub Decoupled REST API</h1>
    <p>Status: <span style="color: green; font-weight: bold;">ONLINE</span></p>
    <p>Available JSON endpoints: <code>/api/scientists</code>, <code>/api/initiatives</code></p>
    </div>
    `);
  });
// /greet?name=***&city=***
app.get('/greet', (req, res) => {
  const { name, city } = req.query;
  res.send(`Hello ${name}, how is the weather in ${city}`);
});
  
app.post("/user", (req, res) => {
  const { username, name, email, password } = req.body;
  if (!username || !name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newUser = createUser({ username, name, email, password });
  res.status(201).json(newUser);
});

// /api/scientists?dept=***
app.get('/api/scientists',(req, res) => {
  const { dept } = req.query;
  if (dept) {
  /*const result = [];
  for(const scientist of scientists) {
    if(scientist.department === dept)
      result.push(scientist);
  }
  return result;*/
    const result = scientists.filter(
      (scientists) => scientists.department.toLowerCase() === dept.toLowerCase(),
    );
    if(result && result.length > 0) {
    return res.json({
      deptScientists: result,
      dept,
      count: result.length,
    });
  } else {
    return req.json({
      errorMsg: `No results for departmen ${dept}`,
      dept,
    });
  }
}
  res.json({ deptScientists: scientists, count: scientists.lengh });
});

// /api/scientists/:id
app.get("api/acientists/:id", (req, res) => {
  const { id } = req.params;
  
});

app.get('/about', (req, res) => {
  res.send('This is my WebApp Class project.')
})


app.post('/about', (req, res) => {
  res.send('This is still my WebApp Class project.')
})

const startServer = async () => {
  try {
    await connectDB(mongoUrl);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    });
  } catch (error) {
    console.error(`Unable to start the server: ${error.message}`);
    process.exitCode = 1;
  }
};

await startServer();
