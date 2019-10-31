import React from 'react';
import ReactDOM from 'react-dom';
import OnePersonReview from './proppers/OnePersonReview';
import {db, Companies, Replies, Users} from "firebase";

function PersonReview() {
  return (
    <div>
		  <OnePersonReview contact =
			  {{letter: "B",review: "I not really like this company."}}
			  />
    </div>
  );
}



export default PersonReview;
