import React from 'react';
import VoterList from '../components/VoterList';

const VoterListScreen = () => {
  const voters = []; // Fetch voters from backend

  return (
    <div>
      <h2>Voter List</h2>
      <VoterList voters={voters} />
    </div>
  );
};

export default VoterListScreen;