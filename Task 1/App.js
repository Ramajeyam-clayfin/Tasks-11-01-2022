import React from 'react';
import './style.css';
import Button from './Button.js';
import Showinfo from './Showinfo.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0, Name: '', City: '', Age: '' };
  }
  showName = (event) => {
    this.setState({ Name: 'Ramajeyam' });
  };
  showCity = (event) => {
    this.setState({ City: 'Pondicherry' });
  };
  showAge = (event) => {
    this.setState({ Age: 20 });
  };

  incrementCount = (event) => {
    this.setState({ counter: ++this.state.counter });
  };

  decrementCount = () => {
    let count = this.state.counter;
    count <= 0
      ? alert('Counter Cannot be Negative !!')
      : this.setState({ counter: --this.state.counter });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.counter > 5 ? 'red' : 'green' }}>
          {this.state.counter}
        </h1>

        <Button inc={this.incrementCount} dec={this.decrementCount} />
        <h1>Name: {this.state.Name}</h1>
        <h1>City :{this.state.City}</h1>
        <h1>Age:{this.state.Age}</h1>
        <Showinfo
          name={this.showName}
          city={this.showCity}
          age={this.showAge}
        />
      </div>
    );
  }
}

