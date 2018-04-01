import React, { Component } from 'react';
import './progress.css';
import * as $ from 'jquery';
import { step } from '../../src/jquery/src/jquery.stepProgressBar';

export class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    step($);
    let mainElement = $(`.step-progressbar`)
    this.props.list.map((d, i) => {
      return (
        mainElement 
          .append(`<div id="steps${i}">${d.type}</div>`)
      )
    })

    this.props.list.map((d, i) => {
      return ($(`#steps${i}`)
        .stepProgressBar({
          currentValue: d.completed ,
          steps: [
            {
              topLabel: 'W',
              value: 20,
            },
            {
              topLabel:"Y",
              value: 23,
            },
            {
              topLabel:"I",
              value: 26,
            },
            {
              topLabel:"II",
              value: 28,
            },
            {
              topLabel:"III",
              value: 30,
            },
            {
              topLabel:"O",
              value: 32,
             
            },
            {
              topLabel:"I",
              value: 34,
            },
            {
              topLabel:"II",
              value: 36,
            },
            {
              topLabel:"III",
              value: 38,
            },
            {
              topLabel:"BI",
              value: 40,
            },
            {
              topLabel:"I",
              value: 42,
            },
            {
              topLabel:"II",
              value: 44,
            },
            {
              topLabel:"III",
              value: 46,
            },
            {
              topLabel:"P",
              value: 48,
            },
            {
              topLabel:"I",
              value: 50,
            },
            {
              topLabel:"II",
              value: 52,
            },
            {
              topLabel:"III",
              value: 54,
            },
            {
              topLabel:"Br",
              value: 56,
            },
            {
              topLabel:"I",
              value: 58,
            },
            {
              topLabel:"II",
              value: 60,
            },
            {
              topLabel:"III",
              value: 62,
            },
            {
              topLabel:"Bk",
              value: 64,
            },

          ],
        })
      )
    })

  }
  render() {
    return (
      <div className='step-progressbar' style={{width:"800px"}}>
      </div>
    );
  }
}
