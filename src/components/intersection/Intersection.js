import React, { useState, useEffect } from 'react';
import StopLight from '../stop-light/StopLight';
import { cycle } from '../../util/timing';

const Intersection = () => {
  const [whichLightIsOn, setWhichLightIsOn] = useState('red');
  const [inverseLightOn, setInverseLightOn] = useState('green');

  useEffect(() => {
    let firstTimeout, secondTimeout, thirdTimeout;

    thirdTimeout = cycle(firstTimeout, secondTimeout, setWhichLightIsOn, setInverseLightOn);
    
    const timer = setInterval(() => {
      clearTimeout(thirdTimeout);

      setWhichLightIsOn('red');
      setInverseLightOn('green');
      
      thirdTimeout = cycle(firstTimeout, secondTimeout, setWhichLightIsOn, setInverseLightOn);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
      <div style={{
        display: 'flex'
      }}>
        <StopLight whichLightIsOn={whichLightIsOn} />
        <StopLight whichLightIsOn={whichLightIsOn} />
      </div>
      <StopLight whichLightIsOn={inverseLightOn} />
    </>
  );

  
};

export default Intersection;
