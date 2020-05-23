import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownRightCircle = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M10.5 11h-4a.5.5 0 0 1 0-1h2.793L5.146 5.854a.5.5 0 1 1 .708-.708L10 9.293V6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z"
      />
    </svg>
  );
});

ArrowDownRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownRightCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownRightCircle;
