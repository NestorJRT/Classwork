const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calculate_bmi', (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    if (!Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) {
        return res.status(400).send('Invalid input. Please provide positive numbers for weight and height.');
    }

    const bmi = (weight / (height ** 2)) * 10000;

    res.send(`<h1>Your BMI is: ${ bmi.toFixed(2) }</h1><a href="/">Go back</a>`);
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});