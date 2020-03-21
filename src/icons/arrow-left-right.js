import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftRight = (props) => {
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
        d="M10.146 7.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 11l-2.647-2.646a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2 11a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 11zm3.854-9.354a.5.5 0 010 .708L3.207 5l2.647 2.646a.5.5 0 11-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2.5 5a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowLeftRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowLeftRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowLeftRight;
