export const cycle = (firstTimeout, secondTimeout, setWhichLightIsOn, setInverseLightOn) => {
  // at 4 seconds change inverse to yellow
  firstTimeout = setTimeout(() => {
    setInverseLightOn('yellow');
  }, 4000); 

  // at 5 seconds change inverse to red and primary to green
  secondTimeout = setTimeout(() => {
    clearTimeout(firstTimeout);
    setInverseLightOn('red');
    setWhichLightIsOn('green');
  }, 5000);

  // at 9 seconds change primary to yellow
  return setTimeout(() => {
    clearTimeout(secondTimeout);
    setWhichLightIsOn('yellow');
  }, 9000);
};
