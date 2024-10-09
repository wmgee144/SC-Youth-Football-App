require('dotenv').config()

const { findReportById, findCrimeById } = require('./service')


exports.showCrimeById = async (req, res) => {
  try {
    // Only allow admins and account owners to access the user data
    const foundCrime = await findCrimeById(req.params.id)

    if (!foundCrime) {
      return res.status(404).json('No User Found')
    }
    
    return res.json(foundCrime)
  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }

}


