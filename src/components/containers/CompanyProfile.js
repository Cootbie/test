import React from 'react';
import ReactDOM from 'react-dom';
import OneCompProfile from './proppers/OneCompProfile';
import {db, Companies, Replies, Users} from "firebase";


function CompanyProfile() {
  return (
    <div>
		  <OneCompProfile info =
			  {{name: "Microsoft" , genLetter: "B"}}
			  />
    </div>
  );
}



export default CompanyProfile;
