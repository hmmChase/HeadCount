import React, { Component } from 'react';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      foundDistricts: []
    };
  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData);
    const foundDistricts = district.findAllMatches();
    this.setState({
      foundDistricts
    });
  }

  render() {
    return <div>Welcome To Headcount 2.0</div>;
  }
}

export default App;
