import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as $ from 'jquery';
import { step } from '../src/jquery/src/jquery.stepProgressBar';

class App extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    step($);


    $('.step-progressbar-1').stepProgressBar({
      currentValue: 110,
      steps: [
        { value: 10 },
        {
          topLabel: '50 custom unit',
          value: 50,
          bottomLabel: '<i class="material-icons">thumb_up</i>'
        },
        {
          value: 150,
          bottomLabel: '<i class="material-icons">card_giftcard</i>'
        },
        {
          value: 200,
          bottomLabel: '<i class="material-icons">star</i>',
          mouseOver: function () { alert('mouseOver'); },
          click: function () { alert('click'); }
        }
      ],
      unit: '€'
    });

  }
  render() {
    return (
      <div className='step-progressbar-1'>
      </div>
    );
  }
}



export default App;
