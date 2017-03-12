import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  render() {
    return (
      <div className={'searchInputWrapper'}>
        <input type={'text'} className={'searchInput'} />
      </div>
    );
  }
}
