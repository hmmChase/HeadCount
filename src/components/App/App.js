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
      comparedDistricts: [],
      comparisonObject: {}
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

  changeSelectedDistricts = district => {
    const selectedDistrictObject = this.state.district.findByName(district);

    const duplicate = this.state.comparedDistricts.includes(
      selectedDistrictObject
    );
    
    if (duplicate) {
      const filteredDistricts = this.state.comparedDistricts.filter(
        comparedDistrict => comparedDistrict !== selectedDistrictObject
      );
      this.updateComparedDistricts(filteredDistricts);

    } else if (this.state.comparedDistricts.length === 1) {
      const addedDistrict = [
        ...this.state.comparedDistricts,
        selectedDistrictObject
      ];
      this.setState({
        comparedDistricts: addedDistrict
      }, () => this.runComparison());
      
    } else if (this.state.comparedDistricts.length === 2) {
      const replacedDistrict = [
        this.state.comparedDistricts[0],
        selectedDistrictObject
      ];
      this.setState({
        comparedDistricts: replacedDistrict
      }, () => this.runComparison());
      
    } else {
      const addedDistrict = [
        ...this.state.comparedDistricts,
        selectedDistrictObject
      ];
      this.updateComparedDistricts(addedDistrict);
    }
  };

  updateComparedDistricts = newState => {
    this.setState({
      comparedDistricts: newState
    });
  };

  runComparison = () => {
    let comparedObject = this.state.district.compareDistrictAverages(this.state.comparedDistricts[0].location, this.state.comparedDistricts[1].location);
    this.setState({
      comparisonObject: comparedObject
    });
  }

  render() {
    return (
      <div>
        <Form filterDistricts={this.filterDistricts} />
        <ComparisonContainer 
          comparedDistricts={this.state.comparedDistricts}
          changeSelectedDistricts={this.changeSelectedDistricts}
          comparisonObject={this.state.comparisonObject}
        />
        <DistrictContainer
          foundDistricts={this.state.foundDistricts}
          changeSelectedDistricts={this.changeSelectedDistricts}
        />
      </div>
    );
  }
}

export default App;
