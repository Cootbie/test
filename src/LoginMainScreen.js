import React, { Component } from 'react';
import './App.css';
import img_elN00021restaurant from './images/LoginMainScreen_elN00021restaurant_883381.jpg';
import img_elImage from './images/LoginMainScreen_elImage_525808.png';
import FirebaseLogin from './FirebaseLogin';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class LoginMainScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    // Check if Firebase login has been completed.
    let unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          if (firebase.auth().currentUser) {
            if (this._elFirebaseLogin)
              this._elFirebaseLogin.saveCurrentUserDataInApp();
            
            this.props.appActions.goToScreen('writeareview');
            
          }
        }
        unregisterAuthObserver();
      }
    );
  }

  onClick_elText2 = (ev) => {
    // Go to screen 'Companies'
    this.props.appActions.goToScreen('companies', { transitionId: 'fadeIn' });
  
  }

  dynamicSearch() {
    //Creating array of matched company names
    var matchedComps = [];
    var filter = $("#searchbar").val().toUpperCase();
    companyNames.forEach(company => {
      if (company.name.toUpperCase().indexOf(filter) > -1) {
        matchedComps.push(company)
      }
    });
    
    //Displaying matched companies
    $(".companyResults").empty();
    matchedComps.forEach(company => {
      $(".companyResults").append(
      `<div id = 'searchItem${company.id}'>
        <p>${company.name}</p>
      </div>`
      )
    })
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
    const style_elN00021restaurant = {
      backgroundImage: 'url('+img_elN00021restaurant+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elImage = {
      backgroundImage: 'url('+img_elImage+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elFirebaseLogin = {
      pointerEvents: 'auto',
     };
    const style_elText2 = {
      color: '#3368ff',
      textAlign: 'center',
      textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 6.8px 18.1px',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
     //Searchbar functionality
    db = firebase.firestore();
    const Names = db.collection("company_names");
    var companyNames = [];
    //Grabbing names from database
    Names.get().then(function(results) {
      companyNames.push(results);
    })

    
     
    return (
      <div className="AppScreen LoginMainScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
          
          <div className="containerMinHeight elN00021restaurant" style={style_elN00021restaurant} />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div className="" style={style_elImage} />
          </div>
          
          <div className='elText'>
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.loginmain_text_758871}</div>
            </div>
          </div>
          
          <div className='elFirebaseLogin'>
            <div className="" style={style_elFirebaseLogin}>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className='elText2'>
            <div className="baseFont" style={style_elText2} onClick={this.onClick_elText2} >
              <div>{this.props.locStrings.loginmain_text2_130360}</div>
            </div>
          </div>

          <div className = "searchbarContainer">
            <input id = "searchbar" type = "text" placeholder = "search..."/>
          <div className = "companyResults"></div>
        </div>
        </div>
        
      </div>
    )
  }
  

}
