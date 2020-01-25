import React from 'react';
import PropTypes from 'prop-types';

const Light = ({ color, whichLightIsOn }) => {
  const isOn = whichLightIsOn === color;

  return (
    <div
      style={
        {
          height: '50px',
          width: '50px',
          backgroundColor: color,
          borderRadius: '50%',
          opacity: !isOn ? 0.2 : 1,
        }
      }>

    </div>
  );
};

Light.propTypes = {
  color: PropTypes.string.isRequired,
  whichLightIsOn: PropTypes.string.isRequired,
};

export default Light;
