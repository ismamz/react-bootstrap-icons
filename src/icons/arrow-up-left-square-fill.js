import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeftSquareFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm7.5 5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V6.707l4.146 4.147a.5.5 0 0 0 .708-.708L6.707 6H9.5a.5.5 0 0 0 0-1z"
      />
    </svg>
  );
});

ArrowUpLeftSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLeftSquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpLeftSquareFill;
