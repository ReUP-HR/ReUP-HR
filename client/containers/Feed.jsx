import React from 'react';
import GiantBombTile from '../components/GiantBomb/GiantBombTile.jsx';
import YoutubeTile from '../components/Youtube/YoutubeTile.jsx';
import RedditTile from '../components/Reddit/RedditTile.jsx';
import TwitterTile from '../components/Twitter/TwitterTile.jsx';
import TwitchTile from '../components/Twitch/TwitchTile.jsx';
import Metacritic from '../components/Metacritic/metacritic.jsx';

let Feed = (props) => (
  <div className="mainView pre-scrollable">
    
      <GiantBombTile giantBombName={props.game.giantBombName}/>
    
      <TwitterTile game={props.game}/>
    
      <RedditTile subRedditName={props.game.subRedditName}/>
    
      <YoutubeTile game={props.game}/>

      <TwitchTile twitchQuery={props.game.twitchQuery}/>

      {/* <Metacritic game={props.game}/> */}
    
    
  </div>
);

export default Feed;