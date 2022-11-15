import { Component } from 'react';
import Card from '../card/Card';
import './cardlist.css';

class CardList extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className="card-list">
        {countries.map((country) => {
          return <Card key={country.name} country={country} />;
        })}
      </div>
    );
  }
}

export default CardList;
