import React, { Component } from 'react';
import { fetchResult } from '../services/fetchSrv';

export class Calculator extends Component {
  state = {
    value1: 0,
    value2: 0,
    result: 0,
  };

  onChange = (input, { target: { value } }) => {
    this.setState({ [input]: value });
  };

  getResult = async () => {
    const { value1, value2 } = this.state;
    const result = await fetchResult(value1, value2);
    this.setState({ result });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Enter a number"
          onChange={this.onChange.bind(null, 'value1')}
        />
        <div>+</div>
        <input
          type="number"
          placeholder="Enter a number"
          onChange={this.onChange.bind(null, 'value2')}
        />
        <button onClick={this.getResult}>Calculate</button>
        <div>= {this.state.result}</div>
      </div>
    );
  }
}
