import React, { Component } from 'react';
import './App.css';
import ListItemReview from './ListItemReview';


export default class PlaceholderForReview extends Component {

  // Properties used by this component:
  // reviewSubject, reviewerName, reviewRating, reviewText, reviewerProfilePicUrl, reviewDate, userID

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let transformStateValue_elListItemReview = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.

      if (typeof input === "undefined") {

      }
      else{
      var CurrentUserID=this.props.appActions.dataSlots['ds_SlotUserID'];
      if (input===CurrentUserID){
      return 1;
      }
      else {
      return 0;
      }
      }
    }

    return (
      <div className="PlaceholderForReview appBg">
        <div className="layoutFlow">
          <div className='hasNestedComps elListItemReview'>
            <div className="">
              <ListItemReview reviewSubject={this.props.reviewSubject || "test"} reviewerName={this.props.reviewerName || "taozi zhang"} reviewRating={this.props.reviewRating || "5"} reviewText={this.props.reviewText || "test"} reviewerProfilePicUrl={this.props.reviewerProfilePicUrl || "https://lh5.googleusercontent.com/-5hm_y0_xoS0/AAAAAAAAAAI/AAAAAAAAACI/VLEPZKNTALc/photo.jpg"} reviewDate={this.props.reviewDate || "1547601438218"} {...this.props} visualStateIndex={transformStateValue_elListItemReview(this.props.userID)} ref={(el)=> this._elListItemReview = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>

      </div>
    )
  }


}
