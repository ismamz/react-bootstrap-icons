import React from 'react';
import PropTypes from 'prop-types';

const SquareHalf = (props) => {
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
        d="M10 3H4a1 1 0 00-1 1v12a1 1 0 001 1h6V3zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SquareHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SquareHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SquareHalf;
