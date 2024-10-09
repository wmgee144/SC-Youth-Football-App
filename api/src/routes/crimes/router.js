const { Router } = require('express')
const {showCrimeById} = require('./controller')

// create a new Router instance
const router = new Router()

// define routes

router.get('/:id', showCrimeById)

// exporting router
module.exports = router