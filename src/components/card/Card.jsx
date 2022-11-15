import { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    const { name, capital, flags, demonym, population } = this.props.country;
    return (
      <div key={name} className="card-container">
        <h1>{name}</h1>
        <img
          alt="Country image"
          src={flags.png}
          width={'300px'}
          height={'200px'}
        />
        <span>
          Capital of {name} is {capital}
        </span>
        <span>
          Demonym of {name} is {demonym}
        </span>
        <span>
          {name}'s population {population.toLocaleString()}
        </span>
      </div>
    );
  }
}

export default Card;
