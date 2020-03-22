import React from 'react';
import PropTypes from 'prop-types';

const LayoutSidebarInsetReverse = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M2 2h12a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm12-1a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h12z"
        clipRule="evenodd"
      />
      <path d="M13 4a1 1 0 00-1-1h-2a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 001-1V4z" />
    </svg>
  );
};

LayoutSidebarInsetReverse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayoutSidebarInsetReverse.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LayoutSidebarInsetReverse;
