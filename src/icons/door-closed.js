import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DoorClosed = forwardRef(({
  color, size, title, ...rest
}, ref) => {
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
      {title ? <title>{title}</title> : null}

      <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
      <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </svg>
  );
});

DoorClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

DoorClosed.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default DoorClosed;
