const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = [
  // Sample users for demonstration
  { id: 1, username: 'admin', password: bcrypt.hashSync('adminpass', 8), role: 'admin' },
  { id: 2, username: 'staff', password: bcrypt.hashSync('staffpass', 8), role: 'staff' },
  { id: 3, username: 'student', password: bcrypt.hashSync('studentpass', 8), role: 'student' }
];

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret';

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, role: user.role });
};

exports.register = (req, res) => {
  // For simplicity, registration is disabled in this demo
  res.status(403).json({ message: 'Registration is disabled' });
};

exports.forgotPassword = (req, res) => {
  // Implement forgot password logic here
  res.json({ message: 'Forgot password endpoint - to be implemented' });
};

exports.changePassword = (req, res) => {
  // Implement change password logic here
  res.json({ message: 'Change password endpoint - to be implemented' });
};
