import React from 'react';
import PropTypes from 'prop-types';

const Bag = (props) => {
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
        d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
        clipRule="evenodd"
      />
      <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
    </svg>
  );
};

Bag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bag.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bag;
