import React from 'react';
import PropTypes from 'prop-types';

const BrightnessAltLow = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M8.5 5.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 6a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm9.743-4.036a.5.5 0 11-.707-.707.5.5 0 01.707.707zm-8.486 0a.5.5 0 11.707-.707.5.5 0 01-.707.707z" />
      <path
        fillRule="evenodd"
        d="M5.041 10.5h5.918a3 3 0 00-5.918 0zM4 11a4 4 0 118 0 .5.5 0 01-.5.5h-7A.5.5 0 014 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BrightnessAltLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BrightnessAltLow.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BrightnessAltLow;
