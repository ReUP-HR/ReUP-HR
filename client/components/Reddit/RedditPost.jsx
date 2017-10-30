import React from 'react';

const RedditPost = (props) => {

  if (props.data.thumbnail === 'self') {
    props.data.thumbnail = '../styles/reddit-logo.png';
  }

  return (
    <div className="Post">
      <a href={`http://www.reddit.com${props.data.permalink}`}>
        <div>{props.data.title}</div>
      </a>
      <div>By {props.data.author}</div>
      <a href={props.data.url}>
        <img src={props.data.thumbnail}/>
      </a>
      <div> ⬆ {props.data.score}</div>
      <br></br>
    </div>
  );
};

export default RedditPost;
