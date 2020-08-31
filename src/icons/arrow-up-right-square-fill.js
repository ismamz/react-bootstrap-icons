import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpRightSquareFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.879 10.828a.5.5 0 1 1-.707-.707l4.096-4.096H6.5a.5.5 0 0 1 0-1h3.975a.5.5 0 0 1 .5.5V9.5a.5.5 0 0 1-1 0V6.732l-4.096 4.096z"
      />
    </svg>
  );
});

ArrowUpRightSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRightSquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpRightSquareFill;
