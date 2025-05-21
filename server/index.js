require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const staffRoutes = require('./routes/staff');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/staff', staffRoutes);

app.get('/', (req, res) => {
  res.send('Multi-Role Dashboard System Backend is running');
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
