import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpRightCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6.707l-4.146 4.147a.5.5 0 0 1-.708-.708L9.293 6H6.5a.5.5 0 0 1 0-1z"
      />
    </svg>
  );
});

ArrowUpRightCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRightCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpRightCircleFill;
