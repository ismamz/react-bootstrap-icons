import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpShort = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707 5.354 8.354a.5.5 0 1 1-.708-.708l3-3z"
      />
    </svg>
  );
});

ArrowUpShort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpShort.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpShort;
