import React from 'react';
import Result from '../components/Result';

const ResultScreen = () => {
  const results = []; // Fetch results from backend

  return (
    <div>
      <h2>Results</h2>
      <Result results={results} />
    </div>
  );
};

export default ResultScreen;