import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const StopwatchFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H9v1.07A7.002 7.002 0 0 1 8 16 7 7 0 0 1 7 2.07V1H6a.5.5 0 0 1-.5-.5zm3 4.5a.5.5 0 0 0-1 0v3.5h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5z"
      />
    </svg>
  );
});

StopwatchFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StopwatchFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default StopwatchFill;
