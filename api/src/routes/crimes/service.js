const knex = require('../../knex.js')

exports.findCrimeById = async (id) => {
  const results = await knex('crimes').select("*").where('id', id)
  return results
}
