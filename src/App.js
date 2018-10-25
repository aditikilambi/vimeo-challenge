import React, { Component } from 'react';
import './App.css';
import Imgdiv from './Imgdiv';
import Carousel from './Carousel'

/*
 *  Component: App
 *  This component contains a render function that returns the entire
 *  project.
 *
 */
class App extends Component {
  

    /*
     * Function: Get Info
     * This function contains an array of information that we intend on storing 
     *   in Part 1's responsive layout. It returns a single element in the
     *   array.
     * @params value: the array index that we wish to return 
     * @return array[value] The object stored at the array index
     *
     *
     */

  getInfo(value){
   var array = [
      {
        id: 0,
        title: 'MONSOON III',
        image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing ' + 
        'elit. Donec tincidunt ipsum augue. In faucibus vehicula magna ' +
        'pulvinar aliquam. Cras aliquam feufiat lorem non auctor. Quisque ' +
        'sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta ' +
        'libero sed semper faucibus.',
      },
      {
        id: 1,
        title: 'BEAMS',
        image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing ' + 
        'elit. Donec tincidunt ipsum augue. In faucibus vehicula magna ' +
        'pulvinar aliquam. Cras aliquam feufiat lorem non auctor. Quisque ' +
        'sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta ' +
        'libero sed semper faucibus.',        
      },
      {
        id: 2,
        title: 'Move 2',
        image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing ' + 
        'elit. Donec tincidunt ipsum augue. In faucibus vehicula magna ' +
        'pulvinar aliquam. Cras aliquam feufiat lorem non auctor. Quisque ' +
        'sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta ' +
        'libero sed semper faucibus.', 
      }
    ];
    return array[value];
  }
  
  /*
   *  Render:
   *  The Imgdiv elements correspond to Part 1's responsive layout.
   *  The Carousel element creates the carousel outlined in Part 2.
   *
   */

  render() {
    return (
      <div>
        <Imgdiv info = { this.getInfo(0)} type = 'monsoon' />
        <Imgdiv info = { this.getInfo(1)} type = 'beams' />
        <Imgdiv info = { this.getInfo(2)} type = 'move' />
        <Carousel />

      </div>
    );
  }
}

export default App;
