import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      filteredUsers: [],
    };
  }
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState(() => {
      return {
        users,
        filteredUsers: users,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search users"
          onChange={(e) => {
            const filteredUsers = this.state.filteredUsers.filter((user) => {
              return user.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            });
            this.setState(() => {
              return e.target.value.toLowerCase()
                ? { filteredUsers }
                : { filteredUsers: this.state.users };
            });
          }}
        />
        {this.state.filteredUsers.map((user, index) => (
          <p key={index} className="read-the-docs">
            My name is {user.name} and I work at {user.company.name}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
