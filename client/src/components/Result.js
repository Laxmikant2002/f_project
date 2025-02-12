import React from 'react';

const Result = ({ results }) => {
  return (
    <div>
      <h2>Election Results</h2>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <p>Candidate: {result.candidateName}</p>
            <p>Votes: {result.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;