import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/Searchbox';

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
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Country"
          className="country-search-box"
        />
        <CardList countries={filteredCountries} />
      </div>
    );
  }
}

export default App;
