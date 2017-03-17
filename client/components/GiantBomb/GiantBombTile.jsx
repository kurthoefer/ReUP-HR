import React, { Component } from 'react';
import axios from 'axios';
import keys from '../../../config/keys.js';
import GiantBombInfo from './GiantBombInfo.jsx';
const query = 'overwatch';

class GiantBombTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInfo: {},
      gameImages: {}
    }
  }

  componentDidMount() {
    axios.get('/giantbomb/get')
      .then((response) => {
        this.setState({ gameInfo: response.data.results[0] });
        this.setState({ gameImages: response.data.results[0].image });
      }).catch((err) => {
        console.log(`Error fetching Giant Bomb data: ${err}`);
      });
  }

  render() {
    return (
      <div className="Tile">
        <div><h3>Game Info:</h3></div>
        <GiantBombInfo game={ this.state.gameInfo } images={ this.state.gameImages } />
      </div>
    );
  }

}

export default GiantBombTile;