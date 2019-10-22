import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  render() {

    return (
      <div className="App">
          <button onClick={this.incrementNum}>+</button>
          <p>{this.state.number}</p>
          <button onClick={this.decrementNum}>-</button>
      </div>
    );
  }

  incrementNum = ()  => {this.setState({number: this.state.number+1})}
  decrementNum = () => {this.setState({number: this.state.number-1})}
}

export default Counter;
