import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState(() => {
      return { users };
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.users.map((user, index) => (
          <p key={index} className="read-the-docs">
            My name is {user.name} and I work at {user.company.name}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
