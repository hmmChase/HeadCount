export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data)
  }

  cleanData(data) {
    let DistrictData = data.reduce((acc, district) => {
      if (!acc[district.Location]) {
        acc[district.Location] = {
          data: [],
          DataFormat: district.DataFormat
        }
      }
      let dataPoint = {
        [district.TimeFrame]: district.data
      }
      acc[district.Location].data.push(dataPoint)
      return acc
    }, {})
    return DistrictData
  }

}

// [
//   {
//     location: 'colorado',
//     data: [{ 2001: 34 }, { 2002: 44 }]
//   }
// ]