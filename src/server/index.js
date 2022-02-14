const dotenv = require('dotenv');
dotenv.config();

//Here we use the personal keys that we have located in a .env file
const weatherbitKey = process.env.weatherbitKey;
const pixabayKey = process.env.pixabayKey;
const geonameKey = process.env.geonameKey;

let projectData = {};

var FormData = require('form-data');
var path = require('path')

const express = require("express");
const app = express();

const fetch = require('node-fetch');
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve("dist/index.html"));
})

const https = require("https");
const http = require("http");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/postData', postData);

// Here we create an async function to make the 3 API calls.

async function postData(req, res) {
  let city = req.body.City;
  
  //Here we compare the date the user is giving us with the day the user is submitting it so we can get the exact info from the API.
  let dayInput = new Date(req.body.dayInput);
  let today = new Date();
  
  const dayMath = Math.abs(dayInput - today);
  const totalDate = Math.ceil(dayMath / (1000 * 60 * 60 * 24));
  const maxDate = totalDate > 15;

    let geonameapi = {};
    const getCoordinates = async() => {
      const result = await fetch(("http://api.geonames.org/searchJSON?q=" + city + "&maxRows=1&username=" + geonameKey), { method: 'GET' })
      try {
          const location = await result.json();
          console.log(location);
          geonameapi = {
              lng: location.geonames[0].lng,
              lat: location.geonames[0].lat,
          }
          console.log(geonameapi);
      } catch (error) {
          console.log("API Geonames failed", error);
      }
    }
    await getCoordinates(city);

    let weatherbit = {};
    const getWeatherbit = async() => {

      const result = await fetch(("http://api.weatherbit.io/v2.0/forecast/daily?" + "lat=" + geonameapi.lat + "&lon=" + geonameapi.lng + "&key=" + weatherbitKey + "&units=M"), { method: 'GET' })
      try {
          const data = await result.json();
          console.log(data);
          weatherbit = {
              forecast: maxDate?data.data[totalDate].weather.description:data.data[0].weather.description,
              hightemp: maxDate?data.data[totalDate].high_temp:data.data[0].high_temp,
              mintemp: maxDate?data.data[totalDate].min_temp:data.data[0].min_temp,

          }
      } catch (error) {
          console.log("API Weatherbit failed", error);
      }
    }
    await getWeatherbit();

    let pixabay = ' ';
    const getPic = async function() {
      const result = await fetch("https://pixabay.com/api/?key=" + pixabayKey + "&q=" + city + "&image_type=photo")
      try {
          const data = await result.json();
          //random img between the first 10 hits on pixabay.
          const random = Math.floor(Math.random() * 11);
          pixabay = {
            img: data.hits[random].webformatURL
          }
      } catch (error) {
      }
    }
    await getPic();

    projectData = {
        forecast: weatherbit.forecast,
        hightemp: weatherbit.hightemp,
        mintemp: weatherbit.mintemp,
        picture: pixabay.img,
        location: city,
    }
        res.send(projectData);
        console.log(projectData);
    }
    try { console.log('API working') } catch (error) {
        console.log("ERROR", error);
    };

    // Get route
    app.get('/all', sendData);

    function sendData(request, response) {
    response.send(projectData);
    console.log(projectData);
    };

    module.exports = app;