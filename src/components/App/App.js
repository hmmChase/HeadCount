import React, { Component } from 'react';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import DistrictContainer from '../DistrictContainer/DistrictContainer';
import Form from '../Form/Form'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      district: new DistrictRepository(kinderData),
      foundDistricts: []
    };
  }

  componentDidMount() {
    const foundDistricts = this.state.district.findAllMatches();
    this.setState({
      foundDistricts
    });
  }

  filterDistricts = (searchValue) => {
    const filteredDistricts = this.state.district.findAllMatches(searchValue)
    this.setState({
      foundDistricts: filteredDistricts
    })
  }

  render() {
    return (
      <div>
        <Form filterDistricts={this.filterDistricts}/>
        <DistrictContainer foundDistricts={this.state.foundDistricts} />
      </div>
    );
  }
}

export default App;
