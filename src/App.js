import React, { Component } from 'react';
import './App.css';
import Imgdiv from './Imgdiv';

class App extends Component {
  
  constructor(props){
      super(props);
  }

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
  
  render() {
    return (
      <div>
        <Imgdiv info = { this.getInfo(0)} />
        <Imgdiv info = { this.getInfo(1)} />
        <Imgdiv info = { this.getInfo(2)} />
      </div>
    );
  }
}

export default App;
