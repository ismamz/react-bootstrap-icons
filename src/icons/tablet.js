import React from 'react';
import PropTypes from 'prop-types';

const Tablet = (props) => {
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
        d="M14 3.5H6a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1v-11a1 1 0 00-1-1zm-8-1a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2v-11a2 2 0 00-2-2H6z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 15.5a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tablet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Tablet;
