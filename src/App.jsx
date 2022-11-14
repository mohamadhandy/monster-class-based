import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Mohamad',
          company: 'Jetbrains',
        },
        {
          name: 'Handy',
          company: 'Microsoft',
        },
        {
          name: 'Nugraha',
          company: 'Google',
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.users.map((user, index) => (
          <h1 key={index}>
            My name is {user.name} and I work at {user.company}
          </h1>
        ))}
      </div>
    );
  }
}

export default App;
