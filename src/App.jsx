import { Component } from 'react';
// import { useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Mohamad',
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
          <button>Click here to change name</button>
          <p>Hi {this.state.name}</p>
        </div>
        <p className="read-the-docs">
          Hello there {this.human.name}, you are {this.human.age} years old!
        </p>
      </div>
    );
  }
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

export default App;
