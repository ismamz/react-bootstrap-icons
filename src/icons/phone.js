import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Phone = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
      />
      <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
});

Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Phone.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Phone;
