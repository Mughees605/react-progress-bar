import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as $ from 'jquery';
import { step } from '../src/jquery/src/jquery.stepProgressBar';
import { ProgressBar } from './stepProgressComponent/progress';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list : [
        { type : 'Front Squat', completed : 30},
        { type : 'Front Squat', completed : 50},
      ]
    }
  }

  render() {
    return (
      <ProgressBar list={this.state.list}/>
    );
  }
}



export default App;
