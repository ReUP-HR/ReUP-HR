import axios from 'axios';
import React from 'react';

const dbQuery = function (cb) {
  axios.get('/games/get')
  .then((response) => {
    cb(response.data);
    return response.data;
  }).catch((err) => {
    console.log('Error fetching games from database via dbQuery:', err);
  });
};

export default dbQuery;