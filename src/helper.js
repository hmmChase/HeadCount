export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data);
  }

  cleanData(data) {
    let DistrictData = data.reduce((districtObject, district) => {
      if (!districtObject[district.Location]) {
        districtObject[district.Location] = {
          location: district.Location.toUpperCase(),
          stats: {}
        };
      }
      districtObject[district.Location].stats = Object.assign(
        {},
        districtObject[district.Location].stats,
        { [district.TimeFrame]: Math.round(1000 * district.Data) / 1000 || 0 }
      );
      return districtObject;
    }, {});
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
}
