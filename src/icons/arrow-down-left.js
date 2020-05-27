import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M3 7.5a.5.5 0 0 1 .5.5v4.5H8a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M12.354 3.646a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.708-.708l9-9a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
});

ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownLeft;
