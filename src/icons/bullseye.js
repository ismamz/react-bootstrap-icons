import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bullseye = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 13A5 5 0 108 3a5 5 0 000 10zm0 1A6 6 0 108 2a6 6 0 000 12z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      />
      <path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
});

Bullseye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bullseye.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bullseye;
