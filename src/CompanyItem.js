import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CompanyItem_elImage_56105.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class CompanyItem extends Component {

  // Properties used by this component:
  // restaurantCoverImage, restaurantName, restaurantAddress, restaurantOpeningHours, dataSheetRow

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  onClick_elButtonReviews = (ev) => {
    let newVal = this.props.dataSheetRow.key;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantId', newVal);

    // Go to screen 'Company Details'
    this.props.appActions.goToScreen('companydetails', { ...this.props, transitionId: 'fadeIn' });

  }


  render() {
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elImage = {
      backgroundImage: 'url('+(this.props.restaurantCoverImage || img_elImage)+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'contain',
     };
    const style_elRestaurantName = {
      fontSize: 25.8,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };

    const value_restaurantName = this.props.restaurantName;

    const style_elText = {
      fontSize: 19.4,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };

    const value_text = this.props.restaurantAddress;

    const style_elAddressCopy = {
      fontSize: 19.4,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };

    const value_addressCopy = this.props.restaurantOpeningHours;

    const style_elButtonReviews = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elRectangleSpacer = {
      background: 'rgba(252, 253, 253, 1.000)',
     };

    return (
      <div className="CompanyItem">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>

        <div className="layoutFlow">
          <div className='elImage'>
            <div className="" style={style_elImage} />
          </div>

          <div className='elRestaurantName'>
            <div className="font-avenirNextRegular" style={style_elRestaurantName}>
              <div>{value_restaurantName !== undefined ? value_restaurantName : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_textblockcopy2_495180}</span>)}</div>
            </div>
          </div>

          <div className='elText'>
            <div className="font-avenirBook" style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_text_230898}</span>)}</div>
            </div>
          </div>

          <div className='elAddressCopy'>
            <div className="font-avenirBook" style={style_elAddressCopy}>
              <div>{value_addressCopy !== undefined ? value_addressCopy : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_addresscopy_1012676}</span>)}</div>
            </div>
          </div>

          <div className='elButtonReviews'>
            <Button className="actionFont" style={style_elButtonReviews}  color="accent" onClick={this.onClick_elButtonReviews} >
              {this.props.locStrings.restaurantitem_button_813725}
            </Button>
          </div>

          <div className='elRectangleSpacer'>
            <div className="" style={style_elRectangleSpacer} />
          </div>
        </div>

      </div>
    )
  }


}
