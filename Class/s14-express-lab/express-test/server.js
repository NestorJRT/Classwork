import express from 'express'
// const express = require('express');

const app = express()
app.use(express.json()); // Middleware

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
})
  
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

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})