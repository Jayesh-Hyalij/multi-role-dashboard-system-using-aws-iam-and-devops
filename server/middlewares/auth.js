const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret';

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  const tokenValue = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
  jwt.verify(tokenValue, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
}

function isAdmin(req, res, next) {
  if (req.userRole === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Require Admin Role' });
  }
}

function isStaff(req, res, next) {
  if (req.userRole === 'staff') {
    next();
  } else {
    res.status(403).json({ message: 'Require Staff Role' });
  }
}

function isStudent(req, res, next) {
  if (req.userRole === 'student') {
    next();
  } else {
    res.status(403).json({ message: 'Require Student Role' });
  }
}

module.exports = {
  verifyToken,
  isAdmin,
  isStaff,
  isStudent
};
