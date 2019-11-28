import React from 'react';
import PropTypes from 'prop-types';

const ArrowCounterclockwise = (props) => {
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
        d="M10 4.5A5.5 5.5 0 114.5 10a.5.5 0 00-1 0 6.5 6.5 0 103.25-5.63l.5.865A5.472 5.472 0 0110 4.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.354 1.646a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 000 .708l2.5 2.5a.5.5 0 10.708-.708L7.207 4.5l2.147-2.146a.5.5 0 000-.708z"
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
