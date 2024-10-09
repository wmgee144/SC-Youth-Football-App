require('dotenv').config()

const { checkConfig } = require('./utility/utils')
checkConfig()

const express = require('express')
const cors = require('cors')

const { pathLogger } = require('./middleware/logger')
// initialize express
const app = express()
const port = 9000

//Application level middleware
app.use(cors())
app.use(express.json()) // body-parser for parsing requests with application/json header
app.use(pathLogger)

// use the routes
const routes = require('./routes/allRoutes')
app.use('/', routes)

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})