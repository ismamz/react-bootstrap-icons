import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SquareHalf = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8V1zm6-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
      />
    </svg>
  );
});

SquareHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SquareHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SquareHalf;
