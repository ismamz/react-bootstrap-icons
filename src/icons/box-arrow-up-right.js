import React from 'react';
import PropTypes from 'prop-types';

const BoxArrowUpRight = (props) => {
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
        d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoxArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowUpRight;
