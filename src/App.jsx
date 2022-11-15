import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchField: '',
    };
  }
  async componentDidMount() {
    const res = await fetch('https://restcountries.com/v2/all');
    const countries = await res.json();
    this.setState(() => {
      return {
        countries,
      };
    });
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return { searchField: e.target.value.toLowerCase() };
    });
  };

  render() {
    const { countries, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Country"
          onChange={onSearchChange}
        />
        {filteredCountries.map((country, index) => (
          <p key={index} className="read-the-docs">
            {country.name} {country.region}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
