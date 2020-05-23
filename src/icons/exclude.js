import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Exclude = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M1.5 0A1.5 1.5 0 0 0 0 1.5v9A1.5 1.5 0 0 0 1.5 12H4v2.5A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4H12V1.5A1.5 1.5 0 0 0 10.5 0h-9zM12 4H5.5A1.5 1.5 0 0 0 4 5.5V12h6.5a1.5 1.5 0 0 0 1.5-1.5V4z"
      />
    </svg>
  );
});

Exclude.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Exclude.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Exclude;
