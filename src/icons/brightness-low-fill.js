import React from 'react';
import PropTypes from 'prop-types';

const BrightnessLowFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <circle cx="8" cy="8" r="4" />
      <circle cx="8" cy="2.5" r=".5" />
      <circle cx="8" cy="13.5" r=".5" />
      <circle cx="13.5" cy="8" r=".5" transform="rotate(90 13.5 8)" />
      <circle cx="2.5" cy="8" r=".5" transform="rotate(90 2.5 8)" />
      <circle cx="11.889" cy="4.111" r=".5" transform="rotate(45 11.89 4.11)" />
      <circle cx="4.111" cy="11.889" r=".5" transform="rotate(45 4.11 11.89)" />
      <circle
        cx="11.889"
        cy="11.889"
        r=".5"
        transform="rotate(135 11.89 11.889)"
      />
      <circle cx="4.111" cy="4.111" r=".5" transform="rotate(135 4.11 4.11)" />
    </svg>
  );
};

BrightnessLowFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BrightnessLowFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BrightnessLowFill;
