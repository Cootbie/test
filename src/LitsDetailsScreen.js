import React, { Component } from 'react';
import './App.css';
import CompanyList from './CompanyList';
import ReviewsComp from './ReviewsComp';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class LitsDetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_selectedRestaurantId

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['restaurants'];
      let serviceOptions = this.props.appActions.serviceOptions_restaurants;
      if ( !this.props.appActions.dataSheetLoaded['restaurants']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("restaurants", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaserestaurantguide(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['restaurants'] = true;
      }
    }
    {
      let dataSheet = this.props.appActions.dataSheets['reviews'];
      let serviceOptions = this.props.appActions.serviceOptions_reviews;
      if ( !this.props.appActions.dataSheetLoaded['reviews']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("reviews", this.props.appActions.dataSlots);
        this.props.appActions.loadData_firebaserestaurantguide(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['reviews'] = true;
      }
    }
  }

  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }

    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 6.8px 18.1px',
     };

    const value_text = this.props.ds_selectedRestaurantId;


    return (
      <div className="AppScreen LitsDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>

        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className="baseFont" style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.litsdetails_text_234936}</span>)}</div>
            </div>
          </div>

          <div className='hasNestedComps elColumns'>
            <div className="">
              <div className="col0">
                <CompanyList appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <ReviewsComp appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Lits + Details</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>

      </div>
    )
  }


}
