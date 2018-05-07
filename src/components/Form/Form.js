import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    };
  }

  handleInputChange = event => {
    let searchInput = event.target.value;
    this.setState({
      searchInput
    });
    this.props.filterDistricts(searchInput);
  };

  render() {
    return (
      <div className="formContainer">
        <h1>Welcome To Headcount 2.0</h1>
        <form>
          <input
            type="text"
            name="district"
            placeholder="Search Districts"
            value={this.state.searchInput}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  filterDistricts: PropTypes.func.isRequired
};

export default Form;
