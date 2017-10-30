import React from 'react';
import axios from 'axios';
import keys from '../../config/keys.js';
const POLYGON_API_KEY = keys.POLYGON_API_KEY;

const fetchPolygonNews = (tile) => {
  axios.get(`http://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=${POLYGON_API_KEY}`)
    .then((response) => {
      tile.setState ({
        contents: tile.state.contents.concat(response.data.articles)
      });  
    })
    .catch((err) => {
      console.log(`Error in fetching polygon data: ${err}`);
    });
};

export default fetchPolygonNews;