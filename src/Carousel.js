import React, { Component } from 'react';
import Slide from './Slide'
// import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
 var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm


class Carousel extends Component {
	
	constructor(props){
	    super(props);
	    this.state = { 
	    	current: 0,
	    	right: true
	    };
	}
	/*
	*	Method: Get Info
	*	This method takes
	*	@params	value	
	*
	*
	*/
	getInfo (value, ifSlide) {
	   	var array = [
	      {
	        title: 'The Fourth Phase',
	        image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
	        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing ' + 
	        'elit. Donec tincidunt ipsum augue. In faucibus vehicula magna ' +
	        'pulvinar aliquam. Cras aliquam feufiat lorem non auctor. Quisque ' +
	        'sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta ' +
	        'libero sed semper faucibus.',
	      },
	      {
	        title: 'Hunt for the Wilderpeople',
	        image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
	        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing ' + 
	        'elit. Donec tincidunt ipsum augue. In faucibus vehicula magna ' +
	        'pulvinar aliquam. Cras aliquam feufiat lorem non auctor. Quisque ' +
	        'sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta ' +
	        'libero sed semper faucibus.',        
	      },
	      {
	        title: 'Move 2',
	        image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
	        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing ' + 
	        'elit. Donec tincidunt ipsum augue. In faucibus vehicula magna ' +
	        'pulvinar aliquam. Cras aliquam feufiat lorem non auctor. Quisque ' +
	        'sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta ' +
	        'libero sed semper faucibus.', 
	      }
	    ];
	    if(ifSlide){
	    	return array[value];
		}
		else {
			return array;
		}
    }



    next() {
    	var increment = (this.state.current + 1) % (this.getInfo(0, false).length);
    	this.setState({
    		current: increment,
    		right: false
    	});
    }


    prev() {
    	var decrement = (this.state.current - 1) % (this.getInfo(0, false).length);
    	if(decrement < 0) {
    		decrement = this.getInfo(0, false).length + decrement;
    	}
    	this.setState({
    		current: decrement,
    		right: true
    	});
    }



  render() {


  	return(

  		<div>

  			<ReactCSSTransitionGroup
        		transitionName={ this.right ? "enterFromRight" : "enterFromLeft"}
          		transitionEnterTimeout={500}
          		transitionLeaveTimeout={500}
        	>    
	        <Slide 
	        	title={ this.getInfo(this.state.current, true).title }
	        	image={ this.getInfo(this.state.current, true).image } 
	        	description = { this.getInfo(this.state.current, true).description }  />	
	        </ReactCSSTransitionGroup>
	   

	        <div className='arrow left' onClick={this.next()}><h1>&larr;</h1></div>
	        <div className='arrow right' onClick={this.prev()}><h1>&rarr;</h1></div>

        </div>
    );
  }
}

export default Carousel;
