import React, { Component } from 'react';

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
      <form>
        <input
          type='text'
          name='district'
          placeholder='Search Districts'
          value={this.state.searchInput}
          onChange={(e) => this.handleInputChange(e)}
        />
      </form>
    )
  }
}

export default Form