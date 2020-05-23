import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BagPlus = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
      />
      <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
      <path
        fillRule="evenodd"
        d="M8 7.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M7.5 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-2z"
      />
    </svg>
  );
});

BagPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BagPlus.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BagPlus;
