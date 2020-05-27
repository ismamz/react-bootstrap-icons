import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DoorClosed = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2zm1 0v13h8V2H4z"
      />
      <path d="M7 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      <path
        fillRule="evenodd"
        d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

DoorClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DoorClosed.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default DoorClosed;
