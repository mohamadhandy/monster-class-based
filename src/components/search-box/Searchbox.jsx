import { Component } from 'react';
import './searchbox.css';

class SearchBox extends Component {
  render() {
    const { placeholder, onChangeHandler, className } = this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
