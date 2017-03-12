import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      results: [
        'example result',
        'another example :)',
      ],
    };
  }

  _handleInputChange(event) {
    const value = event.target.value;
    // do something with this value
  }

  render() {
    const { results } = this.state;
    return (
      <div className={'searchInputWrapper'}>
        <input
          type={'text'}
          className={'searchInput'}
          onChange={() => this._handleInputChange}
        />
        <div className={'searchResultsWrapper'}>
          {results.map((result, resultIndex) => {
            <div className={'searchResultWrapper'} key={resultIndex}>
              {result}
            </div>
          })}
        </div>
      </div>
    );
  }
}
