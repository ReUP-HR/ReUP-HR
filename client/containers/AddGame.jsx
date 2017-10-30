import React from 'react';
import dbPost from '../lib/dbPost.js';
import {
  Redirect
} from 'react-router-dom';

class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      giantBombName: '',
      subRedditName: '',
      twitchQuery: '',
      youtubeChannelId: '',
      twitterName: '',
      metacriticName: '',
    };

    this.handleGameNameChange = this.handleGameNameChange.bind(this);
    this.handleGiantBombNameChange = this.handleGiantBombNameChange.bind(this);
    this.handleSubRedditNameChange = this.handleSubRedditNameChange.bind(this);
    this.handleTwitchQueryChange = this.handleTwitchQueryChange.bind(this);
    this.handleYoutubeChannelIdChange = this.handleYoutubeChannelIdChange.bind(this);
    this.handleTwitterNameChange = this.handleTwitterNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToPage = this.redirectToPage.bind(this);
    this.handleMetacriticChange = this.handleMetacriticChange.bind(this);
  }

  handleGameNameChange(event) {
    this.setState({gameName: event.target.value});
  }

  handleGiantBombNameChange(event) {
    this.setState({giantBombName: event.target.value});
  }

  handleSubRedditNameChange(event) {
    this.setState({subRedditName: event.target.value});
  }

  handleTwitchQueryChange(event) {
    this.setState({twitchQuery: event.target.value});
  }

  handleMetacriticChange(event) {
    this.setState({metacriticName: event.target.value});
  }

  handleYoutubeChannelIdChange(event) {
    this.setState({youtubeChannelId: event.target.value});
  }

  handleTwitterNameChange(event) {
    this.setState({twitterName: event.target.value});
  }

  handleSubmit(event) {
    // event.preventDefault();
    dbPost(this, this.state.gameName, this.state.giantBombName, this.state.subRedditName, this.state.twitchQuery, this.state.youtubeChannelId, this.state.twitterName);
  }

  redirectToPage(response) {
    if (response.status === 200) {
      console.log('Called redirectToPage successfully with status of 200:', response.data[0].gameName);
    } else {
      console.log('Server did not respond back with status code 200:', response.status);
    }
  }

  render() {

    return (
      <div>
        <h1>Please enter game information below!</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Game Name</label><input type="text" className="form-control" value={this.state.gameName} onChange={this.handleGameNameChange} placeholder="i.e. Overwatch" aria-describedby=""/>
            <span><em>Please type the full game name here. i.e. '<strong>Overwatch</strong>'</em></span>
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <label>Giant Bomb Game Name</label><input type="text" className="form-control" value={this.state.giantBombName} onChange={this.handleGiantBombNameChange} placeholder="i.e. overwatch"/>
            <span><em>i.e. 'overwatch' in http://www.giantbomb.com/<strong>overwatch</strong>/3030-48190/</em></span>
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <label>Subreddit Name</label><input type="text" className="form-control" value={this.state.subRedditName} onChange={this.handleSubRedditNameChange} placeholder="i.e. Overwatch"/>
            <span><em>i.e. 'Overwatch' in https://www.reddit.com/r/<strong>Overwatch</strong>/</em></span>
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <label>Twitch Query</label><input type="text" className="form-control" value={this.state.twitchQuery} onChange={this.handleTwitchQueryChange} placeholder="i.e. Overwatch"/>
            <span><em>i.e. '<strong>Overwatch</strong>' as a search query.</em></span>
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <label>Youtube Channel ID</label><input type="text" className="form-control" value={this.state.youtubeChannelId} onChange={this.handleYoutubeChannelIdChange} placeholder="i.e. UClOf1XXinvZsy4wKPAkro2A"/>
            <span><em>To get the url of a page, copy the string at the end of the Youtube channel URL i.e. https://www.youtube.com/channel/<strong>UClOf1XXinvZsy4wKPAkro2A</strong>.  If the channel uses an alias in the URL, please go to <a href="https://johnnythetank.github.io/youtube-channel-name-converter/">this page</a> to get the channel ID instead.</em></span>
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <label>Twitter Handle</label><input type="text" className="form-control" value={this.state.twitterName} onChange={this.handleTwitterNameChange} placeholder="i.e. PlayOverwatch"/>
            <span><em>i.e. 'PlayOverwatch' in https://twitter.com/<strong>PlayOverwatch</strong>/</em></span>
          </div>
          <div className="form-group">
            <label>Metacritic Name</label><input type="text" className="form-control" value={this.state.metacriticName} onChange={this.handleMetacriticChange} placeholder="i.e. overwatch" aria-describedby=""/>
            <span><em>Please type the Metacritic search url for the game here; . i.e. '<strong>overwatch</strong>'</em></span>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Submit Game" />
          </div>
        </form>
      </div>
    );

  }
}

export default AddGame;