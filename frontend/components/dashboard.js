import React from 'react';
import ReactCursorPosition from 'react-cursor-position';

import SearchInput from './SearchInput';

const waffleImage = require("file-loader!../img/waffle.png");


const Dashboard = () => (
  <div className={'dashboardContainer'}>
    <div className={'dashboardHeadersWrapper'}>
      <img src={waffleImage}
        width={60}
        height={60}
        className={'dashboardHeaderImage'}
      />
      <div className={'dashboardTitlesWrapper'}>
        <div className={'dashboardSubHeader'}>
          {'easy torrent streaming'}
        </div>
        <div className={'dashboardHeader'}>{'waffle'}</div>
      </div>
    </div>
    <ReactCursorPosition>
      <SearchInput />
    </ReactCursorPosition>
  </div>
);

export default Dashboard;
