import { Component } from 'react';
// import { useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Mohamad',
      company: 'Jetbrains',
    };
    this.human = {
      age: 90,
      name: 'Alien',
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            onClick={() => {
              this.setState(
                () => {
                  if (this.state.name === 'Mohamad') {
                    return { name: 'Handy' };
                  } else {
                    return { name: 'Mohamad' };
                  }
                },
                () => {
                  console.log(this.state.name);
                }
              );
            }}
          >
            Click here to change name
          </button>
          <p>
            Hi my name is {this.state.name} and I work at {this.state.company}{' '}
          </p>
        </div>
        <p className="read-the-docs">
          Hello there {this.human.name}, you are {this.human.age} years old!
        </p>
      </div>
    );
  }
}

export default App;
