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
        d="M8 1H2a1 1 0 00-1 1v12a1 1 0 001 1h6V1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
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
