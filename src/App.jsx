import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    };
  }
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState(() => {
      return {
        users,
      };
    });
  }
  render() {
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search users"
          onChange={(e) => {
            this.setState(() => {
              return { searchField: e.target.value.toLowerCase() };
            });
          }}
        />
        {filteredUsers.map((user, index) => (
          <p key={index} className="read-the-docs">
            My name is {user.name} and I work at {user.company.name}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
