import React from 'react';
import PropTypes from 'prop-types';

const Compass = (props) => {
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
        d="M10 17.016a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0 1a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        clipRule="evenodd"
      />
      <rect width="4" height="2" x="8" y="2" rx="1" />
      <path d="M8.94 9.44l4.95-2.83-2.83 4.95-4.95 2.83 2.83-4.95z" />
    </svg>
  );
};

Compass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Compass.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Compass;
