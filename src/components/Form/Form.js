import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    let inputvalue = event.target.value
    this.setState ({
      searchInput: inputvalue
    })
    this.props.filterDistricts(inputvalue)
  }

  render () {
    return (
      <div className='formContainer'>
        <h1>Welcome To Headcount 2.0</h1>
        <form>
          <input
            type='text'
            name='district'
            placeholder='Search Districts'
            value={this.state.searchInput}
            onChange={(e) => this.handleInputChange(e)}
          />
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  filterDistricts: PropTypes.func.isRequired
}

export default Form