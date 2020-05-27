import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Crop = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M.5 3.5A.5.5 0 0 1 1 3h2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5zm5.5 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5zM14.5 14a.5.5 0 0 1 .5.5V17a.5.5 0 0 1-1 0v-2.5a.5.5 0 0 1 .5-.5z"
      />
    </svg>
  );
});

Crop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crop.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Crop;
