import React, { Component } from 'react';
import { searchVideos } from '../../api/pirate_bay_api';
import { runPeerFlix } from '../../api/peerflix_api.js';
import ToolTip from './tooltip.js';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      toolTipOpen: false,
      toolTipLocation: {x: 0, y: 0},
      toolTipTorrent: null
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._toggleToolTip = this._toggleToolTip.bind(this);
    this._closeToolTip = this._closeToolTip.bind(this);
  }

  _startStream(event) {
    const magnetLink = event.target.dataset.magnetLink;
    runPeerFlix(magnetLink);
  }

  _toggleToolTip(event) {
    this.setState({
      toolTipOpen: true,
      toolTipLocation: {x: event.pageX + 10, y: event.pageY + 10},
      toolTipTorrent: this.state.results[event.target.dataset.index]
    });
  }

  _closeToolTip() {
    this.setState({ toolTipOpen: false });
  }

  _handleInputChange(event) {
    const value = event.target.value;

    searchVideos(value)
      .then((res) => {
        this.setState({results: res});
      });
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
        <div onClick={this._startStream}>
          <ToolTip open={this.state.toolTipOpen} location={this.state.toolTipLocation} torrent={this.state.toolTipTorrent} />
          {results.map((torrent, index) => (
            <div className={'searchResultWrapper'}
                 data-magnet-link={torrent.magnetLink}
                 data-index={index}
                 key={torrent.magnetLink}
                 onMouseEnter={this._toggleToolTip}
                 onMouseLeave={this._closeToolTip}>
              {torrent.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
