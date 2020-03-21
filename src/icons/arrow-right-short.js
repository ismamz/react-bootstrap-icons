import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightShort = (props) => {
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
        d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowRightShort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRightShort.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowRightShort;
