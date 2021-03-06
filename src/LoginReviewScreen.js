import React, { Component } from 'react';
import './App.css';
import FirebaseLogin from './FirebaseLogin';
import btn_icon_back_loginreview from './images/btn_icon_back_loginreview.png';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class LoginReviewScreen extends Component {

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
      textAlign: 'center',
     };
    const style_elFirebaseLogin = {
      pointerEvents: 'auto',
     };

    return (
      <div className="AppScreen LoginReviewScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>

        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.login_text_518207}</div>
            </div>
          </div>

          <div className='elFirebaseLogin'>
            <div className="" style={style_elFirebaseLogin}>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">LoginReview</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_loginreview} alt="" style={{width: '50%'}} /></div>
        </Appbar>

      </div>
    )
  }


}
