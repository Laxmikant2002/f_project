import React from 'react';
import SecurityAudit from '../components/SecurityAudit';

const SecurityAuditScreen = () => {
  const logs = []; // Fetch logs from backend

  return (
    <div>
      <h2>Security and Audit Logs</h2>
      <SecurityAudit logs={logs} />
    </div>
  );
};

export default SecurityAuditScreen;