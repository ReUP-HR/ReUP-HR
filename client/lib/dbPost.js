import axios from 'axios';
import React from 'react';
import {
  
} from 'react-router-dom';

const dbPost = function (context, gameName, giantBombName, subRedditName, twitchQuery, youtubeChannelId, twitterName) {
  axios.post('/games/post', {
    gameName: gameName,
    giantBombName: giantBombName,
    subRedditName: subRedditName,
    twitchQuery: twitchQuery,
    youtubeChannelId: youtubeChannelId,
    twitterName: twitterName
  })
  .then((response) => {
    console.log('Got response back from dbPost:', response);
    context.redirectToPage(response);
  }).catch((err) => {
    console.log('Error adding game to database via dbPost:', err);
  });
};

export default dbPost;