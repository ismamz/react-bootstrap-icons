import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Power = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"
      />
      <path fillRule="evenodd" d="M7.5 8V1h1v7h-1z" />
    </svg>
  );
});

Power.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Power.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Power;
