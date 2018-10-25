import React, { Component } from 'react';
import Slide from './Slide'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Carousel.css';




class Carousel extends Component {
	
	constructor(props){
	    super(props);
	    this.state = { 
	    	current: 0,
	    	right: true
	    };
	    this.next = this.next.bind(this);
	    this.prev = this.prev.bind(this);
	    this.getRightVal = this.getRightVal.bind(this);
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
	        title: 'Hunt for the Wilderpeople',
	        image: 'https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	        description: 'Raised on hip-hop and foster care, defiant city '+
	        'kid Ricky gets a fresh start in the New Zealand countryside. ' +
	        'From the director of What We Do In the Shadows.'
	      },
	      {
	        title: 'Nichts passiert/A Decent Man',
	        image: 'data:image/jpeg;base64,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',
	        description: 'A Swiss family takes a ski vacation and runs into ' +
	        'trouble when the father, the titular decent amn, finds himself ' +
	        'in a series of moral quandaries.',        
	      },
	      {
	        title: 'Vice Versa',
	        image: 'https://is3-ssl.mzstatic.com/image/thumb/Video62/v4/35/b9/a2/35b9a22f-6c95-7977-ebda-252245aa4688/pr_source.png/268x0w.png',
	        description: 'Come along with the Good Company crew aas they ' +
	        'travel throught the US, Japan, BC and Quebec to showcase skiing ' +
	        'in the best way possible.', 
	      },
	      {
	        title: 'The Fourth Phase',
	        image: 'https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg',
	        description: 'From the creators of The Art of FLIGHT, Red Bull ' +
	        'Media House presents THE FOURTH PHASE, a snowboarding epic ' +
	        'starring iconic athlete Travis Rice.' 
	      },
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
    	var prevSlide = (this.state.current - 1) 
    	var totalSlides = (this.getInfo(0, false).length);
    	var decrement = prevSlide % totalSlides;
    	if(decrement < 0) {
    		decrement = this.getInfo(0, false).length + decrement;
    	}
    	this.setState({
    		current: decrement,
    		right: true
    	});
    }

    getRightVal(){
    	return this.state.right;
    }


  render() {


  	return(
  		
  		<div class = 'Carousel'>
  				<div class = 'leftarrow'>
	  				<div class='arrow' onClick={this.prev}><h1>&lArr;</h1></div>
	  			</div>


  				<div class = 'Slide'>
			  		
			  		<ReactCSSTransitionGroup
			        	transitionName={ this.getRightVal ? 'fromRight' : 'fromLeft'}
			          	transitionEnterTimeout={500}
			          	transitionLeaveTimeout={500}
			        >    
						<Slide 
						    title={ this.getInfo(this.state.current, true).title }
						    image={ this.getInfo(this.state.current, true).image } 
						    description = { this.getInfo(this.state.current, true).description } />	
				    </ReactCSSTransitionGroup>
				</div>

		        <div class = 'rightarrow'>
		        	<div class='arrow' onClick={this.next}><h1>&rArr;</h1></div>
		        </div>
        </div>
    );
  }
}

export default Carousel;
