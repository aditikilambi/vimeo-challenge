import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {
	render(){
	return (
	    <div className="slide">
	      	<img src = { this.props.image } />
	    </div>
	);
}
}

export default Slide;


