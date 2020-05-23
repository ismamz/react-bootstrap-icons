import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownSquareFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
      />
    </svg>
  );
});

ArrowDownSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownSquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownSquareFill;
