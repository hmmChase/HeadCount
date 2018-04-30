export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data)
  }

  cleanData(data) {
    let DistrictData = data.reduce((acc, district) => {
      if (!acc[district.Location]) {
        acc[district.Location] = { location: district.Location.toUpperCase(), data: [] }
      }
      let dataPoint = {
        [district.TimeFrame]: district.Data
      }
      acc[district.Location].data.push(dataPoint)
      return acc
    }, {})
    return DistrictData
  }

  findByName(location) {
    if(!location) {
      return undefined
    }
    const districts = Object.keys(this.stats)
    const foundDistrict = districts.find(district => district.toUpperCase().includes(location.toUpperCase()))
    return this.stats[foundDistrict]
  }
  

}

// [
//   {
//     location: 'colorado',
//     data: [{ 2001: 34 }, { 2002: 44 }]
//   }
// ]