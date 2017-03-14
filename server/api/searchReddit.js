//send requests to reddit. 
//gather the top voted posts for the search Query, somehting like 'https://www.reddit.com/r/Overwatch/top/?sort=top&t=week'

let searchReddit = function (game) {
  return fetch (`https://www.reddit.com/r/${game}/top/.json?sort=top&t=day`)
    .then((data) => data)
    .catch((err) => console.log('error retrieving from Reddit: ', err));
};

module.exports = searchReddit;