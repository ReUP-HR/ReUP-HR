import React, { Component } from 'react';
import axios from 'axios';
import GiantBombInfo from './GiantBombInfo.jsx';
import fetchGiantBomb from '../../lib/giantBomb.js';

class GiantBombTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInfo: {},
      gameImages: {}
    }
  }

  componentDidMount() {
    fetchGiantBomb(this, 'overwatch');
  }

  render() {
    return (
      <div className="GiantBombTile">
        <GiantBombInfo game={ this.state.gameInfo } images={ this.state.gameImages } />
      </div>
    );
  }

}

export default GiantBombTile;