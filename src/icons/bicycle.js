import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bicycle = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M3 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <path
        fillRule="evenodd"
        d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935 2.375 3.8a.5.5 0 1 1-.848.53L10.5 6.943l-2.076 3.322A.5.5 0 0 1 8 10.5H3a.5.5 0 0 1-.424-.765L5 5.857V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443L3.902 9.5h3.196L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057z"
      />
    </svg>
  );
});

Bicycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bicycle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bicycle;
