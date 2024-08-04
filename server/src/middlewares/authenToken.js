const jwt = require("jsonwebtoken");

function authenToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log('No token provided');
      return res.sendStatus(401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Token verification failed:', error);
    return res.sendStatus(403);
  }
}

module.exports = { authenToken } 