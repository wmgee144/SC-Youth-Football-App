const jwt = require('jsonwebtoken')

exports.authenticate = async (req, res, next) => {

  if (!process.env.SECRET_KEY) {
    // If the client receives this message it means the SECRET Key
    res.status(500).json({ message: 'Internal Server Error' })
  }

  // Check if the correct Auth Header is provided
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Incorrect authentication header' })
  }

  // Get the JWT from the request headers
  const token = authHeader.split(' ')[1]

  // If there's no token, return an error
  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    // Verify the JWT
    const decoded = jwt.verify(token, process.env.SECRET_KEY)

    // find a user with the id
    const Users = require('../routes/users/service')
    console.log(Users)
    const user = await Users.findById(decoded.id)

    if (!user) {
      return res.status(401).json({ message: 'Invalid token: User does not exist' })
    }
    // add user to request object for future use
    req.user = user

    return next()

  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token format' })
  }
}