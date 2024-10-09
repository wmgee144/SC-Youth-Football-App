require('dotenv').config()


const { findAllReports, findReportsByCounty, findReportById } = require('./service')

exports.showReportById = async (req, res) => {
  try {

    // Only allow admins and account owners to access the user data
    const foundReport = await findReportById(req.params.id)

    if (!foundReport) {
      return res.status(404).json('No User Found')
    }
    
    return res.json(foundReport)
  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }

}

exports.showAllReports = async (req, res) => {
    try {
      const allReports = await findAllReports(req.params)
      console.log('allReports: ', allReports)
      return res.json(allReports)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
  
  exports.showCountyReports = async (req, res) => {
    console.log(req.params.county)
    try {
      const countyReports = await findReportsByCounty(req.params.county)
      console.log('countyReports: ', countyReports)
      return res.json(countyReports)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }