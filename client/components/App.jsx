import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import dbQuery from '../lib/dbQuery.js';
import Home from './Home.jsx';
import Explore from '../containers/Explore.jsx';
import Feed from '../containers/Feed.jsx';
import AddGame from '../containers/AddGame.jsx';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionAddGames} from '../actions/actionAddGames.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myGames: [],
      currentGame: {}
    };

    this.queryCallback = this.queryCallback.bind(this);
    this.changeGame = this.changeGame.bind(this);

  }

  queryCallback (games) {
    this.props.actionAddGames(games);
  }

  componentDidMount () {
    dbQuery(this.queryCallback);
  }

  changeGame (game) {
    this.setState({
      currentGame: game
    });
  }

  render() {

    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              { this.props.games ? 
                <Home myGames={this.props.games} changeGame={this.changeGame}/> : 
                <Home myGames={[]} changeGame={this.changeGame}/>
              }
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <Redirect from="/" to="/explore" />
              <Route path="/explore" component={Explore} />
              <Route path="/feed" component={() => (<Feed game={this.state.currentGame}/>)} />
              <Route path="/addgame" component={AddGame} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps (state) {
  return {
    games: state.allGames
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({actionAddGames: actionAddGames}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

