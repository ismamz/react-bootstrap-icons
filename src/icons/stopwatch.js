import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Stopwatch = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 15A6 6 0 108 3a6 6 0 000 12zm0 1A7 7 0 108 2a7 7 0 000 14z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 4.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4.5a.5.5 0 010-1h3V5a.5.5 0 01.5-.5zM5.5.5A.5.5 0 016 0h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
      <path d="M7 1h2v2H7V1z" />
    </svg>
  );
});

Stopwatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stopwatch.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Stopwatch;
