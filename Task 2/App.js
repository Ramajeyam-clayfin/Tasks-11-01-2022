import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        mail: '',
        mob: '',
        city: '',
      },
    };
  }

  nameGetter = (event) => {
    this.setState({ name: event.target.value });
  };
  mailGetter = (event) => {
    this.setState({ mail: event.target.value });
  };
  mobGetter = (event) => {
    this.setState({ mob: event.target.value });
  };
  cityGetter = (event) => {
    this.setState({ city: event.target.value });
  };

  buttonClicked = (event) => {
    alert(
      'Name : ' +
        this.state.name +
        ' Mail : ' +
        this.state.mail +
        ' Mobile : ' +
        this.state.mob +
        ' City : ' +
        this.state.city
    );
  };
  render() {
    return (
      <div>
        <h1> Registration</h1>
        <label>Name : </label>
        <input type="text" onChange={this.nameGetter} />
        <br />
        <br />
        <label>Mail Id : </label>
        <input type="text" onChange={this.mailGetter} /> <br />
        <br />
        <label>Mobile : </label>
        <input type="text" onChange={this.mobGetter} />
        <br />
        <br />
        <label>City : </label>
        <input type="text" onChange={this.cityGetter} />
        <br />
        <br />
        <button onClick={this.buttonClicked}>Register</button>
      </div>
    );
  }
}
