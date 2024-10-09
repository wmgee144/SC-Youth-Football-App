const knex = require('../../knex.js')

exports.findReportById = async (id) => {
  const results = await knex('reports').select("*").where('id', id)
  return results
}

//selects all reports from the reports table
exports.findAllReports = async () => {
    const reports = await knex('reports').select("*")
    console.log('reports: ', reports)
  
    return reports
  }
  //selects reports where input "county", from reports table
  exports.findReportsByCounty = async (county) => {
    console.log("county:", county)
    const countyReports = await knex('reports')
      .select("*")
      .where('county', county.trimStart())
    console.log('countyReports: ', countyReports)
  
    return countyReports
  }