const express = require('express');
const router = express.Router();
var request = require('request');

router.route('/getWeather')
  .post(function(req, res) {
    console.log(req.body)
  	request('http://api.openweathermap.org/data/2.5/weather?lat=' + req.body.x + '&lon=' + req.body.y + '&appid=529a30af9158166efe11c30adf06f2d5', (err, response, body) => {
  		res.send(body)
  	} )
  })

module.exports = router;