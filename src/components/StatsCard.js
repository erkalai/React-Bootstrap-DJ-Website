import React, { useEffect, useState } from 'react';
import '../assets/css/style.css'; 

const StatsCard = () => {
  const [projectsDone, setProjectsDone] = useState(0);
  const [trustedClients, setTrustedClients] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);

  // Mock values for the counts (e.g., from API or static data)
  const targetValues = {
    projectsDone: 150,
    trustedClients: 100,
    teamMembers: 16
  };

  // Function to animate the count
  const animateCount = (setState, target) => {
    let start = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setState(target); // Reaches the target value
      } else {
        setState(Math.round(start)); // Update the state value
      }
    }, 10);
  };

  useEffect(() => {
    animateCount(setProjectsDone, targetValues.projectsDone);
    animateCount(setTrustedClients, targetValues.trustedClients);
    animateCount(setTeamMembers, targetValues.teamMembers);
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-card">
        <div className='statsh2'>Projects Done</div>
        <p className="stats-number">{projectsDone}</p>
      </div>
      <div className="stats-card">
        <div className='statsh2'>Trusted Clients </div>
        <p className="stats-number">{trustedClients}</p>
      </div>
      <div className="stats-card">
        <div className='statsh2'>Team Members</div>
        <p className="stats-number">{teamMembers}</p>
      </div>
    </div>
  );
};

export default StatsCard;
