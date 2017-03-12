import React from 'react';

import SearchInput from './SearchInput';


const Dashboard = () => (
  <div className={'dashboardContainer'}>
    <div className={'dashboardHeadersWrapper'}>
      <div className={'dashboardHeader'}>{'waffle'}</div>
      <div className={'dashboardSubHeader'}>
        {'easy torrent streaming'}
      </div>
    </div>
    <SearchInput />
  </div>
);

export default Dashboard;
