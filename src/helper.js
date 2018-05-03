export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data);
  }

  cleanData(data) {
    let DistrictData = data.reduce((districtObject, district) => {
      if (!districtObject[district.Location]) {
        districtObject[district.Location] = {
          location: district.Location.toUpperCase(),
          stats: {},
          average: null
        };
      }
      districtObject[district.Location].stats = Object.assign(
        {},
        districtObject[district.Location].stats,
        { [district.TimeFrame]: Math.round(1000 * district.Data) / 1000 || 0 }
      );
      return districtObject;
    }, {});

    Object.keys(DistrictData).forEach(key => {
      const average = Object.values(DistrictData[key].stats).reduce((total, num) => {
        return total + num;
      }, 0) / Object.values(DistrictData[key].stats).length
      
      DistrictData[key].average = Math.round(1000 * average) / 1000;
    })
    return DistrictData;
  }

  findByName(location) {
    if (!location) {
      return undefined;
    }
    const districts = Object.keys(this.stats);
    const foundDistrictName = districts.find(district =>
      district.toUpperCase().includes(location.toUpperCase())
    );
    return this.stats[foundDistrictName];
  }

  findAllMatches(inputValue) {
    const districts = Object.keys(this.stats);
    if (!inputValue) {
      return districts.map(district => this.stats[district]);
    } else {
      const filteredDistrictNames = districts.filter(district =>
        district.toUpperCase().includes(inputValue.toUpperCase())
      );
      const districtObjects = filteredDistrictNames.map(
        district => this.stats[district]
      );
      return districtObjects;
    }
  }

  findAverage(district) {
    const foundDistrict = this.findByName(district);
    const statsKeys = Object.keys(foundDistrict.stats);
    const average =
      statsKeys.reduce((total, year) => {
        return total + foundDistrict.stats[year];
      }, 0) / statsKeys.length;

    return Math.round(1000 * average) / 1000;
  }

  compareDistrictAverages(district1, district2) {
    const district1Average = this.findAverage(district1);
    const district2Average = this.findAverage(district2);
    const comparedAverage =
      Math.round(1000 * (district1Average / district2Average)) / 1000;

    return {
      [district1.toUpperCase()]: district1Average,
      [district2.toUpperCase()]: district2Average,
      compared: comparedAverage
    };
  }
}
