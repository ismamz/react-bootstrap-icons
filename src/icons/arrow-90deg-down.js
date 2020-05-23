import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Arrow90degDown = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2.646 9.646a.5.5 0 0 1 .708 0L6 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
      />
      <path
        fillRule="evenodd"
        d="M6 13a.5.5 0 0 1-.5-.5V6A2.5 2.5 0 0 1 8 3.5h5.5a.5.5 0 0 1 0 1H8A1.5 1.5 0 0 0 6.5 6v6.5a.5.5 0 0 1-.5.5z"
      />
    </svg>
  );
});

Arrow90degDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Arrow90degDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Arrow90degDown;
