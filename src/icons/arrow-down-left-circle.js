import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeftCircle = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fillRule="evenodd"
        d="M5.5 11h4a.5.5 0 0 0 0-1H6.707l4.147-4.146a.5.5 0 0 0-.708-.708L6 9.293V6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z"
      />
    </svg>
  );
});

ArrowDownLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownLeftCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownLeftCircle;
