export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data)
  }

  cleanData(data) {
    let DistrictData = data.reduce((acc, district) => {
      if (!acc[district.Location]) {
        acc[district.Location] = { 
          location: district.Location.toUpperCase(),
          stats: {} 
        }
      }
      acc[district.Location].stats = 
      Object.assign({}, acc[district.Location].stats, {[district.TimeFrame]: Math.round(1000 * district.Data) / 1000 || 0})
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