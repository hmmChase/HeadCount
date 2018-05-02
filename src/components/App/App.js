import React, { Component } from 'react';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import Form from '../Form/Form';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import DistrictContainer from '../DistrictContainer/DistrictContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      district: new DistrictRepository(kinderData),
      foundDistricts: [],
      comparedCard: []
    };
  }

  componentDidMount() {
    const foundDistricts = this.state.district.findAllMatches();
    this.setState({
      foundDistricts
    });
  }

  filterDistricts = searchValue => {
    const filteredDistricts = this.state.district.findAllMatches(searchValue);
    this.setState({
      foundDistricts: filteredDistricts
    });
  };

  toggleSelectedDistrict = district => {
    this.addToCompare(district);
    this.removeFromCompare(district);
  };

  addToCompare = district => {
    const districtObject = this.state.district.findByName(district);
    console.log(districtObject);
  };

  removeFromCompare = district => {
    const districtObject = this.state.district.findByName(district);
    console.log(districtObject);
  };

  render() {
    return (
      <div>
        <Form filterDistricts={this.filterDistricts} />
        <ComparisonContainer />
        <DistrictContainer
          foundDistricts={this.state.foundDistricts}
          toggleSelectedDistrict={this.toggleSelectedDistrict}
        />
      </div>
    );
  }
}

export default App;
