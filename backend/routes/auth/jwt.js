const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_KEY, { expiresIn: '1h' })
}

module.exports ={
    authenticateToken,generateAccessToken
}