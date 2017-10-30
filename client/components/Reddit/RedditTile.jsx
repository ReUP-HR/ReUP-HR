import React from 'react';
import Reddit from '../../lib/reddit.js';
import axios from 'axios';
import RedditPost from './RedditPost.jsx';

class RedditTile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      posts: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    Reddit.getReddit(this, this.props.subRedditName);
  }

  render () {
    return (
      <div className="RedditTile">
        <h3>Top Reddit Posts</h3>
        <div className = 'pre-scrollable postScroller'>
          {this.state.posts.map((post) => 
            <RedditPost data={post.data}/>
          )}
        </div>
      </div>
    );
  }
}

export default RedditTile;