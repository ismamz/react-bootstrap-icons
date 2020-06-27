import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Eyeglasses = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <path
        fillRule="evenodd"
        d="M8 7a1 1 0 0 0-1 1H6a2 2 0 1 1 4 0H9a1 1 0 0 0-1-1zM0 8a.5.5 0 0 1 .5-.5h1v1h-1A.5.5 0 0 1 0 8zm15.5.5h-1v-1h1a.5.5 0 0 1 0 1z"
      />
    </svg>
  );
});

Eyeglasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eyeglasses.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Eyeglasses;
