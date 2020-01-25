import React from 'react';
import PropTypes from 'prop-types';
import Light from './Light';

const StopLight = ({ whichLightIsOn }) => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Light color="red" whichLightIsOn={whichLightIsOn} />
      <Light color="yellow" whichLightIsOn={whichLightIsOn} />
      <Light color="green" whichLightIsOn={whichLightIsOn} />
    </section>
  );
};

StopLight.propTypes = {
  whichLightIsOn: PropTypes.string.isRequired,
};

export default StopLight;
