import React, { Component, PropTypes } from 'react';


const ToolTip = ({
  location,
  open,
  torrent
}) => {

  const _style = () => {
    return {
      position: "absolute",
      top: location.y,
      left: location.x,
      display: open ? "block" : "none"
    };
  };

  return (
    <div style={_style()} className={'tooltipWrapper'}>
      <ul>
        <li>size: {torrent.size}</li>
        <li>seeders: {torrent.seeders}</li>
      </ul>
    </div>
  );
}

ToolTip.propType = {
  location: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  torrent: PropTypes.object.isRequired,
};

export default ToolTip;
