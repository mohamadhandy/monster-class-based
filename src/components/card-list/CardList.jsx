import { Component } from 'react';

class CardList extends Component {
  render() {
    const { countries } = this.props;
    console.log('this.props', this.props.countries);
    return (
      <div>
        {countries.map((country) => (
          <p key={country.name} className="read-the-docs">
            Capital of {country.name} is {country.capital}
          </p>
        ))}
      </div>
    );
  }
}

export default CardList;
