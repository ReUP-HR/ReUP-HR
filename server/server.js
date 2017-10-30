var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const Twitter = require('twitter');
const axios = require('axios');
const keys = require ('../config/keys.js');
var request = require('request');
var db = require('../db/db/db.js');
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json, allows response.body to show the retrieved information
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.get('/giantbomb/get', function(req, res) {
  const GIANT_BOMB_URL = `http://www.giantbomb.com/api/search?api_key=${keys.GIANT_BOMB_API_KEY}&format=json&query=${req.query.gameName}&resources=game`;

  const optionsGB = {
    url: GIANT_BOMB_URL,
    headers: {
      'User-Agent': 'ReUPServer'
    }
  };

  request.get(optionsGB, function(error, response, body) {
    if (error) {
      console.log('ERROR GETTING RESPONSE FROM GIANT BOMB\'S API SERVER');
    } else {
      res.send(body);
    }
  });
});

const client = new Twitter({
  consumer_key: keys.TWITTER_API_KEY,
  consumer_secret: keys.TWITTER_API_SECRET,
  access_token_key: keys.TWITTER_ACCESS_TOKEN,
  access_token_secret: keys.TWITTER_TOKEN_SECRET
});

app.get('/twitter', function(req, res) {
  client.get('search/tweets', { q: `from:${req.query.twitterHandle} AND -filter:retweets AND -filter:replies` }, function(error, tweets, response) {
    if (error) { console.log('error in fetching tweets: ', error); }
    res.send(tweets.statuses);
  });
});

app.get('/games/get', function(req, res) {
  db.Game.findAll().then(function(games) {
    var gamesList = JSON.parse(JSON.stringify(games));  // converts SQL instance to JSON object
    res.send(gamesList);
  }).error(function(err) {
    console.log('CANNOT GET GAMES FROM DATABASE DUE TO:', err);
  });

});

app.post('/games/post', function(req, res) {
  db.Game.findOrCreate({where: {gameName: req.body.gameName}, defaults: {
    giantBombName: req.body.giantBombName,
    subRedditName: req.body.subRedditName,
    twitchQuery: req.body.twitchQuery,
    youtubeChannelId: req.body.youtubeChannelId,
    twitterName: req.body.twitterName
  }}).then(function(response) {
    var game = JSON.parse(JSON.stringify(response));
    console.log('SUCCESSFULLY ADDED GAME TO DATABASE:', game);
    res.send(200, game);
    // res.sendStatus(200);
  }).error(function(err) {
    console.log('CANNOT ADD GAME TO DATABASE DUE TO:', err);
  });
});

app.listen(PORT, function() {
  console.log('ReUP: Express server connection established at: ', PORT);
});