import React, { Component } from 'react';
import classnames from 'classnames';
import ToolTip from './tooltip.js';

import { searchVideos } from '../../api/pirate_bay_api';
import { runPeerFlix } from '../../api/peerflix_api.js';
import { bindAll } from 'lodash';

const waffleImageSmall = require("file-loader!../img/waffle_symbol.png");

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchInput: '',
      debounceTimer: null,
    };

    bindAll(this, '_handleInputChange', '_debounce');
  }

  _startStream(event) {
    const magnetLink = event.target.dataset.magnetlink;
    runPeerFlix(magnetLink);
  }

  _handleInputChange(event) {
    const value = event.target.value;

    this.setState({ searchInput: value });
    this._debounce(200, searchVideos, value);
  }

  _debounce(delay, fn, value) {
    let context = this;
    clearTimeout(this.state.debounceTimer);
    this.state.debounceTimer = setTimeout(() => {
      fn.apply(context, [value]).then((res) => {
        this.setState({results: res});
      })
    }, delay);
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
