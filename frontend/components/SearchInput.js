import React, { Component } from 'react';
import classnames from 'classnames';
import ToolTip from './tooltip.js';

import { searchVideos } from '../../api/pirate_bay_api';
import { runPeerFlix } from '../../api/peerflix_api.js';

const waffleImageSmall = require("file-loader!../img/waffle_symbol.png");

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchInput: '',
    };
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _startStream(event) {
    const magnetLink = event.target.dataset.magnetlink;
    debugger;
    runPeerFlix(magnetLink);
  }

  _handleInputChange(event) {
    const value = event.target.value;

    this.setState({ searchInput: value });

    searchVideos(value)
    .then((res) => {
      this.setState({results: res});
    });
  }

  render() {
    const { results, searchInput } = this.state;
    const isSearchInput = searchInput.length > 0;
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
            isSearchInput ? 'searchResultsWrapper' : 'searchResultsWrapperEmpty',
          )}
          onClick={this._startStream}
        >
        {isSearchInput ? (
          <div>
            {results.map((result, resultIndex) => (
              <div
                className={'searchResultWrapper'}
                key={resultIndex}
                data-magnetlink={result.magnetLink}
              >
                {result.name}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <img src={waffleImageSmall} />
          </div>
        )}
        </div>
      </div>
    );
  }
}
