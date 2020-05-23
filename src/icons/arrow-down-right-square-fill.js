import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownRightSquareFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm4.5 11h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.793L5.854 5.146a.5.5 0 1 0-.708.708L9.293 10H6.5a.5.5 0 0 0 0 1z"
      />
    </svg>
  );
});

ArrowDownRightSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownRightSquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownRightSquareFill;
