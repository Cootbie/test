import React from 'react'
import ReactDOM from 'react-dom'


function OneCompProfile(props){
	return(
		<div>
		<h1> {props.info.name} </h1>
		<p> {props.info.genLetter} </p>
		</div>
		);


}

export default OneCompProfile;
