import React, { useState } from 'react';

 export default function HooksCounter(){

  const [tally, setTally] = useState(0);
  const [factorOfFive, setFactorOfFive] = useState(false);

  const updateCounters = () => {
    let newCount = tally + 1;
    setTally(newCount);

    setFactorOfFive(newCount > 0 && newCount % 5 === 0);
  }
  return(  

    <div>
      <h2>Button has been clicked {tally} time(s)</h2>
      <h2>Factor of Five? {factorOfFive.toString()}</h2>
      <button type="button" onClick={updateCounters}>
      Update clicks
      </button>
    </div>
  )
};
