import React from 'react';

const VoterList = ({ voters }) => {
  return (
    <div>
      {voters.map((voter, index) => (
        <div key={index}>
          <p>Full Name: {voter.fullName}</p>
          <p>Voter ID: {voter.voterId}</p>
          <p>Mobile Number: {voter.mobileNumber}</p>
          <p>Verification Status: {voter.verificationStatus}</p>
        </div>
      ))}
    </div>
  );
};

export default VoterList;