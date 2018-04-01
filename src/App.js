import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as $ from 'jquery';
import { step } from '../src/jquery/src/jquery.stepProgressBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [1, 2, 3]
    }
  }

  componentDidMount() {
    step($);
    let mainElement = $(`.step-progressbar`)
    this.state.list.map((d, i) => {
      return (
        mainElement
          .append(`<div id="steps${i}">${i}</div>`)
      )
    })

    this.state.list.map((d, i) => {
      return ($(`#steps${i}`)
        .stepProgressBar({
          currentValue: 100 + i * 20,
          steps: [
            { value: d + 10 },
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
        })
      )
    })

  }
  render() {
    return (
      <div className='step-progressbar'>
      </div>
    );
  }
}



export default App;
