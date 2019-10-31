import React from 'react'
import ReactDOM from 'react-dom'


function OnePersonReview(props){
	return(
		<div>
		<h1> {props.contact.letter} </h1>
		<p> {props.contact.review} </p>
		</div>
		);


}

export default OnePersonReview;
