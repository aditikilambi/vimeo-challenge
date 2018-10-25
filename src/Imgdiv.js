import React, { Component } from 'react';
import './Imgdiv.css';

/*
 *	Component: Imgdiv
 *	This component creates a single Image, Title, and Description layout
 * 	for use in Part 1.
 *	
 */

class Imgdiv extends Component {
	render() {

		return(
			<div class = {this.props.type}>
				<div class = 'Imgdiv' id = {this.props.info.id % 2 === 0 ? 'right' : 'left'  }>
					<div class = 'text'>
						<h2>{this.props.info.title}</h2>
						<p>{this.props.info.description}</p>
					</div>
					<div class = 'image'>
						<img src = {this.props.info.image} />
					</div>
				</div>
			</div>

		);
	}
}

export default Imgdiv;

