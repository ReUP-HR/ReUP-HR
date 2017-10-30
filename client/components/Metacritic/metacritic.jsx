import React, { Component } from 'react';

class metacritic extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return <div className='MetacriticTile'>
              <h3 className='MetacriticTitle'>Metacritic Score:</h3>
              <iframe sandbox='allow-scripts' src={`http://www.metacritic.com/game/pc/${this.props.game.giantBombName}`}></iframe>
            </div>;
  }
}

export default metacritic;