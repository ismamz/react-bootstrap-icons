import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CameraVideoOffFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M1.429 3.55A1.66 1.66 0 0 0 1 4.667v6.666C1 12.253 1.746 13 2.667 13h6.666c.43 0 .821-.162 1.117-.429l-9.02-9.02zm13.111 8.868a.798.798 0 0 0 .46-.726V4.308c0-.63-.693-1.01-1.233-.696L11 5.218v-.551C11 3.747 10.254 3 9.333 3H5.121l9.419 9.418z" />
      <path
        fillRule="evenodd"
        d="M13.646 14.354l-12-12 .708-.708 12 12-.708.707z"
      />
    </svg>
  );
});

CameraVideoOffFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CameraVideoOffFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CameraVideoOffFill;
