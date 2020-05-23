import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ToggleOn = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      />
    </svg>
  );
});

ToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ToggleOn.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ToggleOn;
