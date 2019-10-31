import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CompanyDetailsScreen_elImage_298929.jpg';
import ListItemReview from './ListItemReview';
import btn_icon_342806 from './images/btn_icon_342806.png';
import btn_icon_back_companydetails from './images/btn_icon_back_companydetails.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class CompanyDetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
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

  onClick_elTextReviewsHeader = (ev) => {
    window.location = '';

  }


  onClick_elFab = (ev) => {
    let newVal = this.props.restaurantName;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantName', newVal);

    // Go to screen 'LoginReview'
    this.props.appActions.goToScreen('loginreview', { transitionId: 'fadeIn' });

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

    const dataSheet_reviews = this.props.dataSheets['reviews'];
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elImage = {
      backgroundImage: 'url('+(this.props.dataSheetRow ? this.props.dataSheetRow.restaurantCoverImage : '' || img_elImage)+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elRestaurantName = {
      fontSize: 25.8,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };

    const value_restaurantName = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantName : '';

    const style_elRestaurantAddress = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 6.8px 18.1px',
     };

    const value_restaurantAddress = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantAddress : '';

    const style_elTextOpeningHours = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 6.8px 18.1px',
     };

    const value_textOpeningHours = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantOpeningHours : '';

    const style_elTextDescription = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 6.8px 18.1px',
     };

    const value_textDescription = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantDescription : '';

    const style_elTextRestaurantWWW = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 6.8px 18.1px',
     };

    const value_textRestaurantWWW = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantWWW : '';

    const style_elLine = {
      borderTop: '1px solid black',
     };
    let transformPropValue_textReviewsHeader = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      return "Reviews for "+input;
    }
    const style_elTextReviewsHeader = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

    const value_textReviewsHeader = transformPropValue_textReviewsHeader(this.props.dataSheetRow ? this.props.dataSheetRow.restaurantName : '');

    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };

    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('reviews').items);

    const style_elFab = {
      display: 'block',
      color: '(null)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

    return (
      <div className="AppScreen CompanyDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>

        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div className="" style={style_elImage} />
          </div>

          <div className='elRestaurantName'>
            <div className="font-avenirNextRegular" style={style_elRestaurantName}>
              <div>{value_restaurantName !== undefined ? value_restaurantName : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_restaurantname_578163}</span>)}</div>
            </div>
          </div>

          <div className='elRestaurantAddress'>
            <div className="baseFont" style={style_elRestaurantAddress}>
              <div>{value_restaurantAddress !== undefined ? value_restaurantAddress : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textopeninghourscopy_928206}</span>)}</div>
            </div>
          </div>

          <div className='elTextOpeningHours'>
            <div className="baseFont" style={style_elTextOpeningHours}>
              <div>{value_textOpeningHours !== undefined ? value_textOpeningHours : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_text2_739445}</span>)}</div>
            </div>
          </div>

          <div className='elTextDescription'>
            <div className="baseFont" style={style_elTextDescription}>
              <div>{value_textDescription !== undefined ? value_textDescription : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textcopy_429184}</span>)}</div>
            </div>
          </div>

          <div className='elTextRestaurantWWW'>
            <div className="baseFont" style={style_elTextRestaurantWWW}>
              <div>{value_textRestaurantWWW !== undefined ? value_textRestaurantWWW : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textdescriptioncopy_421084}</span>)}</div>
            </div>
          </div>

          <div className='elLine'>
            <div className="" style={style_elLine} />
          </div>

          <div className='elTextReviewsHeader'>
            <div className="headlineFont" style={style_elTextReviewsHeader} onClick={this.onClick_elTextReviewsHeader} >
              <div>{value_textReviewsHeader !== undefined ? value_textReviewsHeader : (<span className="propValueMissing">{this.props.locStrings.reviews_textblock_1033646}</span>)}</div>
            </div>
          </div>

          <div className='hasNestedComps elList'>
            <ul className="" style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItemReview dataSheetId={'reviews'} dataSheetRow={row} {...{ 'reviewSubject': row['reviewSubject'], 'reviewerName': row['reviewerName'], 'reviewRating': row['reviewRating'], 'reviewText': row['reviewText'], 'reviewerProfilePicUrl': row['reviewerProfilePicUrl'], 'reviewDate': row['reviewDate'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </ul>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Company Details</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_companydetails} alt="" style={{width: '50%'}} /></div>
        </Appbar>

        <div className="screenFgContainer">
          <div className="foreground">
            <Button className="actionFont elFab" style={style_elFab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_342806} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          </div>
        </div>
      </div>
    )
  }


}
