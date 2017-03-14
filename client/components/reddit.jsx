import React from 'react';

class Reddit extends React.Component {
  constructor (props) {
    super(props);


  }

  render () {
    return (
      <div>
        <div class = 'redditTitle'>Top Reddit Posts</div>
        <div class = 'redditPosts'>
          {props.state.redditPosts.map((post) => 
            <RedditPost /*info passed down into single reddit post*//>
          )}
        </div>
      </div>
    );
  }
}