import React from 'react';
export default class Showinfo extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.name}>Show Name</button>
        <button onClick={this.props.city}>Show City</button>
        <button onClick={this.props.age}>Show Age</button>
      </div>
    );
  }
}
