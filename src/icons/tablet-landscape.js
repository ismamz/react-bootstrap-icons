import React from 'react';
import PropTypes from 'prop-types';

const TabletLandscape = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M3.5 6v8a1 1 0 001 1h11a1 1 0 001-1V6a1 1 0 00-1-1h-11a1 1 0 00-1 1zm-1 8a2 2 0 002 2h11a2 2 0 002-2V6a2 2 0 00-2-2h-11a2 2 0 00-2 2v8z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M15.5 10a1 1 0 10-2 0 1 1 0 002 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

TabletLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TabletLandscape.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TabletLandscape;
