import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H3.5V9a.5.5 0 0 1-1 0V4z"
      />
      <path
        fillRule="evenodd"
        d="M2.646 3.646a.5.5 0 0 1 .708 0l9 9a.5.5 0 0 1-.708.708l-9-9a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
});

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpLeft;
