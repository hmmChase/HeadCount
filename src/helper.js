export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data)
  }

  cleanData(data) {
    let DistrictData = data.reduce((acc, district) => {
      if (!acc[district.Location]) {
        acc[district.Location] = { location: district.Location, data: [] }
      }
      let dataPoint = {
        [district.TimeFrame]: Math.round(1000 * district.Data) / 1000 || 0
      }
      acc[district.Location].data.push(dataPoint)
      return acc
    }, {})
    return DistrictData
  }

  findByName = (location) => {

  }


}