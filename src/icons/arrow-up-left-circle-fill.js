import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeftCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.5 5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V6.707l4.146 4.147a.5.5 0 0 0 .708-.708L6.707 6H9.5a.5.5 0 0 0 0-1z"
      />
    </svg>
  );
});

ArrowUpLeftCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLeftCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpLeftCircleFill;
