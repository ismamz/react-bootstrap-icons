import React from 'react';
import PropTypes from 'prop-types';

const BrightnessLow = (props) => {
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
      <path
        fillRule="evenodd"
        d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      />
      <circle cx="10" cy="4.5" r=".5" />
      <circle cx="10" cy="15.5" r=".5" />
      <circle cx="15.5" cy="10" r=".5" transform="rotate(90 15.5 10)" />
      <circle cx="4.5" cy="10" r=".5" transform="rotate(90 4.5 10)" />
      <circle cx="13.889" cy="6.111" r=".5" transform="rotate(45 13.89 6.11)" />
      <circle cx="6.111" cy="13.889" r=".5" transform="rotate(45 6.11 13.89)" />
      <circle
        cx="13.889"
        cy="13.889"
        r=".5"
        transform="rotate(135 13.89 13.89)"
      />
      <circle cx="6.111" cy="6.111" r=".5" transform="rotate(135 6.11 6.11)" />
    </svg>
  );
};

BrightnessLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BrightnessLow.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BrightnessLow;
