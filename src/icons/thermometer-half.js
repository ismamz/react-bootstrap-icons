import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ThermometerHalf = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M8 1.75a.25.25 0 0 1 .25.25v9.02a1.5 1.5 0 1 1-.5 0V2A.25.25 0 0 1 8 1.75z" />
      <path d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z" />
    </svg>
  );
});

ThermometerHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThermometerHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ThermometerHalf;
