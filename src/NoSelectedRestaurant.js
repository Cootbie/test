import React, { Component } from 'react';
import './App.css';


export default class NoSelectedRestaurant extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const style_elText = {
      color: '#fa9331',
      textAlign: 'center',
     };

    return (
      <div className="NoSelectedRestaurant appBg">
        <div className="layoutFlow">
          <div className='elText'>
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.noselectedrestaurant_text_121995}</div>
            </div>
          </div>
        </div>

      </div>
    )
  }


}
