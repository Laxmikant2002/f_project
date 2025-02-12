import React from 'react';
import CandidateVerification from '../components/CandidateVerification';

const CandidateVerificationScreen = () => {
  const candidates = []; // Fetch candidates from backend

  const handleApprove = (candidate) => {
    // Approve candidate logic
  };

  const handleReject = (candidate) => {
    // Reject candidate logic
  };

  return (
    <div>
      <h2>Candidate Verification</h2>
      <CandidateVerification
        candidates={candidates}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default CandidateVerificationScreen;