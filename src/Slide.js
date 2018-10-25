import React, { Component } from 'react';
import './Slide.css';

/*
 * 	Component: Slide
 *	This component creates a simple slide layout to be used in the 
 * 	Carousel.
 *
 */

class Slide extends Component {
	render(){
		return (
		    <div className="slide">
		    	<div class = 'poster'>
		      		<img src = { this.props.image } />
		      	</div>
		      	<div class = 'blurb'>
		      		<h1> {this.props.title} </h1>
		      		<p> {this.props.description} </p>
		      	</div>

		    </div>
		);
	}
}

export default Slide;


