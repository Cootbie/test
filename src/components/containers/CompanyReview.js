import React from 'react';
import ReactDOM from 'react-dom';
import OneReview from './proppers/OneReview';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
var admin = require('firebase-admin');

var serviceAccount = require("../../ServiceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://cootbie.firebaseio.com"
});

const db = admin.firestore();

const Companies = db.collection('Companies');

const Replies = db.collection('Replies');

const Reviews = db.collection('Reviews');

const Users = db.collection('Users');

export {db, Companies, Replies, Users}

function CompanyReview() {
  return (
    <div>
		  <OneReview contact =
			  {{letter: "A",review: "I really like this company."}}
			  />
    </div>
  );
}

let company = Companies.doc('4Vx7efZ4l0P2meAoQ6r3');
company.get().then(doc => {
	if (!doc.exists) {
		console.log('No such document!');
	} else {
		console.log('Document data:', doc.data());
	}
}).catch(err => {
	console.log('Error getting document', err);
});

export default CompanyReview;
