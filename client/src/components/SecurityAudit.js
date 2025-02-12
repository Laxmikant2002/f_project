import React from 'react';

const SecurityAudit = ({ logs }) => {
  return (
    <div>
      <h2>Security and Audit Logs</h2>
      {logs.map((log, index) => (
        <div key={index}>
          <p>{log}</p>
        </div>
      ))}
    </div>
  );
};

export default SecurityAudit;