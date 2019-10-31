import React from 'react'
import ReactDOM from 'react-dom'


function OneReview(props){
	return(
		<div>
		<h1> {props.contact.letter} </h1>
		<p> {props.contact.review} </p>
		</div>
		);


}

export default OneReview;
