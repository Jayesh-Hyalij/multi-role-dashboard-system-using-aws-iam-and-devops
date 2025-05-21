const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const { verifyToken, isStaff } = require('../middlewares/auth');

router.use(verifyToken);
router.use(isStaff);

// Student ID management
router.post('/students', staffController.addStudent);
router.put('/students/:id', staffController.editStudent);
router.delete('/students/:id', staffController.removeStudent);

// Results
router.post('/results', staffController.addResult);

// Notices
router.post('/notices', staffController.addNotice);

// Remarks
router.post('/remarks', staffController.addRemark);

// Attendance
router.post('/attendance', staffController.addAttendance);

module.exports = router;
