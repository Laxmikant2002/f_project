import React from 'react';

const CandidateCard = ({ name, voteCount }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Votes: {voteCount}</p>
    </div>
  );
};

export default CandidateCard;