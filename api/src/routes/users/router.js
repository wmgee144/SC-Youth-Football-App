const { Router } = require('express')
const {showAll, showById, register, login, showMe, deleteUser, updateUser, updateUserById} = require('./controller')

//import middleware
const { authenticate } = require('../../middleware/auth')

// create a new Router instance
const router = new Router()

// define routes

router.get('/', authenticate, showAll)
router.get('/me', authenticate, showMe)
router.get('/id/:id', showById)
router.post('/register', register)
router.post('/login', login)
router.put('/update/me', authenticate, updateUserById)
router.put('/update/', authenticate, updateUser)
router.delete('/delete/:id', authenticate, deleteUser)

// exporting router
module.exports = router

