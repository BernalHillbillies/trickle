import React, { Component } from 'react';
import { searchVideos } from '../../api/pirate_bay_api';
import { runPeerFlix } from '../../api/peerflix_api.js';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _startStream(event) {
    runPeerFlix(event.target.id);
  }

  _handleInputChange(event) {
    const value = event.target.value;

    if ( value === '' ) {
      this.setState({ results: [] });
    }

    if ( value && value !== '' ) {
      searchVideos(value)
        .then((res) => {
          this.setState({results: res});
        });
    }
  }

  render() {
    const { results } = this.state;
    return (
      <div className={'searchInputWrapper'}>
        <input
          type={'text'}
          className={'searchInput'}
          onChange={this._handleInputChange}
          placeholder={'what should we watch?'}
        />
        <div className={'searchResultsWrapper'} onClick={this._startStream}>
          {results.map((result, resultIndex) => {
            console.log('search result', result);
            return (
              <div className={'searchResultWrapper'} id={result.magnetLink} key={resultIndex}>
                {result.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
