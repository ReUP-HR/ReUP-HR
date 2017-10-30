import axios from 'axios';
import keys from '../../config/keys.js';
import React from 'react';
// const game = 'overwatch'; //hardcoded game for now

const fetchYoutube = (tile, channelId) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=4&key=${keys.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`)
    .then((response) => {
      tile.setState ({
        videos: tile.state.videos.concat(response.data.items)
      });  
    })
    .catch((err) => {
      console.log(`Error in fetching youtube data: ${err}`);
    });
};

export default fetchYoutube;

//https://www.googleapis.com/youtube/v3/search?maxResults=1&part=snippet&q=${game}&type=video&videoCaption=closedCaption&key=${keys.YOUTUBE_API_KEY}`

