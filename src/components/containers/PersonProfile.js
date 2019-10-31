import React from 'react';
import ReactDOM from 'react-dom';
import OnePersonProfile from './proppers/OnePersonProfile'
import {db, Companies, Replies, Users} from "firebase";

function PersonProfile() {
  return (
    <div>
		<OnePersonProfile info =
		{{name: "Jane Doe"}}
		/>
    </div>
  );
}



export default PersonProfile;
