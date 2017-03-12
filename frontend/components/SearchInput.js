import React, { Component } from 'react';
import classnames from 'classnames';
import ToolTip from './tooltip.js';

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
    const magnetLink = event.target.dataset.magnetLink;
    runPeerFlix(magnetLink);
  }

  _handleInputChange(event) {
    const value = event.target.value;

    if ( value && value !== '' ) {
      searchVideos(value)
      .then((res) => {
        this.setState({results: res});
      });
    }
    else {
      this.setState({ results: [] });
    }
  }

  render() {
    const { results } = this.state;
    const areResults = results.length > 0;
    return (
      <div className={'searchInputWrapper'}>
        <input
          type={'text'}
          className={'searchInput'}
          onChange={this._handleInputChange}
          placeholder={'what should we watch?'}
        />
        <div
          className={classnames(
            areResults ? 'searchResultsWrapper' : 'searchResultsWrapperEmpty',
          )}
          onClick={this._startStream}
        >
        {areResults ? (
          <div>
            {results.map((result, resultIndex) => (
              <div
                className={'searchResultWrapper'}
                id={result.magnetLink}
                key={resultIndex}
              >
                {result.name}
              </div>
            ))}
          </div>
        ) : (
          <div>
            {':('}
          </div>
        )}
        </div>
      </div>
    );
  }
}
