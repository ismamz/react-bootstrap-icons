import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TabletLandscape = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M1 4v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H2a1 1 0 00-1 1zm-1 8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2a2 2 0 00-2 2v8z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M14 8a1 1 0 10-2 0 1 1 0 002 0z"
        clipRule="evenodd"
      />
    </svg>
  );
});

TabletLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TabletLandscape.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TabletLandscape;
