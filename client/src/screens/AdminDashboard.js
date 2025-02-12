import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

const AdminDashboardScreen = () => {
  const summary = {}; // Fetch summary from backend

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AdminDashboard summary={summary} />
    </div>
  );
};

export default AdminDashboardScreen;