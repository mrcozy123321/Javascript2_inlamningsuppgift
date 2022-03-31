const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretkey = process.env.SECRET_KEY;

exports.generateToken = user => {
  return jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' })
}

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    req.userData = jwt.verify(token, secretKey);
    next();
  } catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'Access restricted! Please Login!'
    })
  }
}