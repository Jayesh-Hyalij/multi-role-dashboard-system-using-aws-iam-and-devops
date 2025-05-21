import React from 'react';
import StaffManagement from '../components/StaffManagement';

function StaffDashboard() {
  return (
    <div>
      <h1>Staff Dashboard</h1>
      <p>Welcome, Staff! You can manage students, results, notices, remarks, and attendance.</p>
      <StaffManagement />
    </div>
  );
}

export default StaffDashboard;
