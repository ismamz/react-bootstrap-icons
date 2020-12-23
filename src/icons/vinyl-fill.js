import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VinylFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </svg>
  );
});

VinylFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VinylFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default VinylFill;
