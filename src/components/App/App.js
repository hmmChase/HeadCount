import React, { Component } from 'react';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import DistrictContainer from '../DistrictContainer/DistrictContainer';
import Form from '../Form/Form'
import './App.css';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();

    this.state = {
      foundDistricts: []
    };
  }

  componentDidMount() {
    const foundDistricts = district.findAllMatches();
    this.setState({
      foundDistricts
    });
  }

  filterDistricts = (searchValue) => {
    const filteredDistricts = district.findAllMatches(searchValue)
    this.setState({
      foundDistricts: filteredDistricts
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Form filterDistricts={this.filterDistricts}/>
        <DistrictContainer foundDistricts={this.state.foundDistricts} />
      </div>
    );
  }
}

export default App;
