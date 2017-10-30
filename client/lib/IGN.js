import React from 'react';
import axios from 'axios';
import keys from '../../config/keys.js';
const IGN_API_KEY = keys.IGN_API_KEY;

const fetchIGNNews = (tile) => {
  axios.get(`http://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=${IGN_API_KEY}`)
    .then((response) => {
      tile.setState ({
        contents: tile.state.contents.concat(response.data.articles)
      });  
    })
    .catch((err) => {
      console.log(`Error in fetching IGN data: ${err}`);
    });
};

export default fetchIGNNews;