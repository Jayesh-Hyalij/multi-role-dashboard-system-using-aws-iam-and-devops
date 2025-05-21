const students = [];
const results = [];
const notices = [];
const remarks = [];
const attendanceRecords = [];

exports.addStudent = (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ message: 'Student id and name are required' });
  }
  const exists = students.find(s => s.id === id);
  if (exists) {
    return res.status(400).json({ message: 'Student with this id already exists' });
  }
  students.push({ id, name });
  res.json({ message: 'Student added successfully' });
};

exports.editStudent = (req, res) => {
  const studentId = req.params.id;
  const { name } = req.body;
  const student = students.find(s => s.id === studentId);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  if (name) student.name = name;
  res.json({ message: 'Student updated successfully' });
};

exports.removeStudent = (req, res) => {
  const studentId = req.params.id;
  const index = students.findIndex(s => s.id === studentId);
  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }
  students.splice(index, 1);
  res.json({ message: 'Student removed successfully' });
};

exports.addResult = (req, res) => {
  const { studentId, subject, marks } = req.body;
  if (!studentId || !subject || marks == null) {
    return res.status(400).json({ message: 'studentId, subject and marks are required' });
  }
  results.push({ studentId, subject, marks });
  res.json({ message: 'Result added successfully' });
};

exports.addNotice = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'title and content are required' });
  }
  notices.push({ title, content, date: new Date() });
  res.json({ message: 'Notice added successfully' });
};

exports.addRemark = (req, res) => {
  const { studentId, remark } = req.body;
  if (!studentId || !remark) {
    return res.status(400).json({ message: 'studentId and remark are required' });
  }
  remarks.push({ studentId, remark, date: new Date() });
  res.json({ message: 'Remark added successfully' });
};

exports.addAttendance = (req, res) => {
  const { studentId, date, status } = req.body;
  if (!studentId || !date || !status) {
    return res.status(400).json({ message: 'studentId, date and status are required' });
  }
  attendanceRecords.push({ studentId, date, status });
  res.json({ message: 'Attendance added successfully' });
};
