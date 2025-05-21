import React, { useState } from 'react';

function StaffManagement() {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <div>
      <h2>Staff Management</h2>
      <div>
        <button onClick={() => setActiveTab('students')}>Students</button>
        <button onClick={() => setActiveTab('results')}>Results</button>
        <button onClick={() => setActiveTab('notices')}>Notices</button>
        <button onClick={() => setActiveTab('remarks')}>Remarks</button>
        <button onClick={() => setActiveTab('attendance')}>Attendance</button>
      </div>
      <div style={{ marginTop: 20 }}>
        {activeTab === 'students' && <div>Student management form and list here</div>}
        {activeTab === 'results' && <div>Results management form here</div>}
        {activeTab === 'notices' && <div>Notices management form here</div>}
        {activeTab === 'remarks' && <div>Remarks management form here</div>}
        {activeTab === 'attendance' && <div>Attendance management form here</div>}
      </div>
    </div>
  );
}

export default StaffManagement;
