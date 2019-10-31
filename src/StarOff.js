import React, { Component } from 'react';
import './App.css';
import btn_icon_863226 from './images/btn_icon_863226.png';


export default class StarOff extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_863226+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };

    return (
      <div className="StarOff">
        <div className="foreground">
          <button className="actionFont containerMinHeight elIconButton" style={style_elIconButton} />
        </div>
      </div>
    )
  }


}
