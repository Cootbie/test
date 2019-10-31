import React, { Component } from 'react';
import './App.css';
import btn_icon_896640 from './images/btn_icon_896640.png';


export default class StarOn extends Component {

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
      backgroundImage: 'url('+btn_icon_896640+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };

    return (
      <div className="StarOn">
        <div className="foreground">
          <button className="actionFont containerMinHeight elIconButton" style={style_elIconButton} />
        </div>
      </div>
    )
  }


}
