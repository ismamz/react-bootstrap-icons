import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowUpLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M14.5 13a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 13V9a.5.5 0 011 0v4a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H9a.5.5 0 010-1h4A1.5 1.5 0 0114.5 5v8zm-7-11a.5.5 0 00-.5-.5H2a.5.5 0 00-.5.5v5a.5.5 0 001 0V2.5H7a.5.5 0 00.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1.646 1.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
});

BoxArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowUpLeft;
