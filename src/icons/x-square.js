import React from 'react';
import PropTypes from 'prop-types';

const XSquare = (props) => {
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
        d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.293 10L6.646 7.354l.708-.708L10 9.293l2.646-2.647.708.708L10.707 10l2.647 2.646-.708.708L10 10.707l-2.646 2.647-.708-.707L9.293 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};

XSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XSquare.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default XSquare;
