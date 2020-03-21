import React from 'react';
import PropTypes from 'prop-types';

const ArrowClockwise = (props) => {
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
        d="M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowClockwise.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowClockwise;
