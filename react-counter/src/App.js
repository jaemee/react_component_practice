import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterWithReduxState from './components/counter/CounterWithReduxState'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <CounterWithReduxState />
        </header>
      </div>
    );
  }

  // incrementNum = ()  => {this.setState({number: this.state.number+1})}
  // decrementNum = () => {this.setState({number: this.state.number-1})}
}

export default App;
