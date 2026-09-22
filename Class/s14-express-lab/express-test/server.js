import express from 'express'
// const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send(`
      <div style="font-family: sans-serif; padding: 20px;">
        <h1>SustainHub Decoupled REST API</h1>
        <p>Status: <span style="color: green; font-weight: bold;">ONLINE</span></p>
        <p>Available JSON endpoints: <code>/api/scientists</code>, <code>/api/initiatives</code></p>
      </div>
    `);
});

app.get('/about', (req, res) => {
  res.send('This is my WebApp Class project.')
})

app.get('/greet', (req, res) => {
    const { name, city } = req.query;
  res.send(`Hello ${name}, how is the weather in ${city}`);
})

app.post('/about', (req, res) => {
  res.send('This is still my WebApp Class project.')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})