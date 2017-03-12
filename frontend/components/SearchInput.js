import React, { Component } from 'react';
import { searchVideos } from '../../api/pirate_bay_api';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      results: [
        'example result',
        'another example :)',
      ],
    };
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(event) {
    const value = event.target.value;
    searchVideos(value)
      .then((res) => {
        console.log(res);
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
        />
        <div className={'searchResultsWrapper'}>
          {results.map((result, resultIndex) => (
            <div className={'searchResultWrapper'} key={resultIndex}>
              {result.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
