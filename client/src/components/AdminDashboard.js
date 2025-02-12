import React from 'react';

const AdminDashboard = ({ summary }) => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Voters: {summary.totalVoters}</p>
      <p>Verified Voters: {summary.verifiedVoters}</p>
      <p>Total Votes Cast: {summary.totalVotes}</p>
    </div>
  );
};

export default AdminDashboard;