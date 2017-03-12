import React, { Component } from 'react';

export default class ToolTip extends Component {

  _style(){
    return{
      position: "absolute",
      top: this.props.location.y,
      left: this.props.location.x,
      display: this.props.open ? "block" : "none"
    };
  }

  render(){
    if(!this.props.torrent){ return <div></div> }
    return(
      <div style={this._style()} id="tooltip">
        <ul>
          <li>size: {this.props.torrent.size}</li>
          <li>seeders: {this.props.torrent.seeders}</li>
        </ul>
      </div>
    );
  }
}
