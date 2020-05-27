import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Toggles = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M11.5 1h-7a2.5 2.5 0 0 0 0 5h7a2.5 2.5 0 0 0 0-5zm-7-1a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm0 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      />
      <path
        fillRule="evenodd"
        d="M8 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zM4.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      />
    </svg>
  );
});

Toggles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggles.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Toggles;
