import React from 'react';
import PropTypes from 'prop-types';

const ArrowCounterclockwise = (props) => {
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
        d="M12.83 6.706a5 5 0 00-7.103-3.16.5.5 0 11-.454-.892A6 6 0 112.545 5.5a.5.5 0 11.91.417 5 5 0 109.375.789z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.854.146a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 000 .708l2.5 2.5a.5.5 0 10.708-.708L5.707 3 7.854.854a.5.5 0 000-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowCounterclockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowCounterclockwise.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowCounterclockwise;
