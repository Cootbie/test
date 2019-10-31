import React, { Component } from 'react';
import './App.css';
import ListItemRestaurantsListDetails from './ListItemRestaurantsListDetails';


export default class CompanyList extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const dataSheet_restaurants = this.props.appActions.getDataSheet('restaurants');
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };

    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('restaurants').items);


    return (
      <div className="CompanyList appBg">
        <div className="layoutFlow">
          <div className='hasNestedComps elList'>
            <ul className="" style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItemRestaurantsListDetails dataSheetId={'restaurants'} dataSheetRow={row} {...{ 'restaurantName': row['restaurantName'], 'restaurantAddress': row['restaurantAddress'], 'restaurantOpeningHours': row['restaurantOpeningHours'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </ul>
          </div>
        </div>

      </div>
    )
  }


}
