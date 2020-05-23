import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretLeftSquareFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10a.5.5 0 0 1-.832.374l-4.5-4a.5.5 0 0 1 0-.748l4.5-4A.5.5 0 0 1 10.5 4v8z"
      />
    </svg>
  );
});

CaretLeftSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretLeftSquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CaretLeftSquareFill;
