import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LockFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <rect width="11" height="9" x="2.5" y="7" rx="2" />
      <path
        fillRule="evenodd"
        d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
      />
    </svg>
  );
});

LockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LockFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LockFill;
