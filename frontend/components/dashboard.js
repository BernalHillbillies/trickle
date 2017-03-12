import React from 'react';

import SearchInput from './SearchInput';

var WaffleImage = require('babel!svg-react!../img/waffle_symbol?name=WaffleImage');


const Dashboard = () => (
  <div className={'dashboardContainer'}>
    <div className={'dashboardHeader'}>{'waffle'}</div>
    <div className={'dashboardSubHeader'}>
      {'easy torrent streaming'}
    </div>
    <SearchInput />
  </div>
);

export default Dashboard;
