import { Component } from 'react';
import './cardlist.css';

class CardList extends Component {
  render() {
    const { countries } = this.props;
    console.log('this.props', this.props.countries);
    return (
      <div className="card-list">
        {countries.map((country) => {
          const { name, capital, flags, demonym, population } = country;
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
        })}
      </div>
    );
  }
}

export default CardList;
