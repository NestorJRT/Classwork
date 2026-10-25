const express = require('express');
const https = require("https");

const app = express();

app.use(express.urlencoded({ extended: true }));

const apiKey = process.env.OPENWEATHER_API_KEY;

app.post("/", (req, res) => {
  const city = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(city) +
    "&appid=" + apiKey +
    "&units=metric";

  https.get(url, (response) => {
    let data = "";

    response.on("data", (part) => {
      data += part;
    });

    response.on("end", () => {
      const climate = JSON.parse(data);

      if (response.statusCode !== 200) {
        return res.send("It was not able to consult climate: " + climate.message);
      }

      const temperature = climate.main.temp;
      const description = climate.weather[0].description;
      const icon = climate.weather[0].icon;

      res.send(`
        <h1>climate on ${climate.name}</h1>
        <p>temperature: ${temperature} °C</p>
        <p>${description}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
        <p><a href="/">Consult another city</a></p>
      `);
    });
  }).on("error", () => {
    res.send("It was not able to connect with the server");
  });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});