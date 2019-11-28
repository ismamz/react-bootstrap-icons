import React from 'react';
import PropTypes from 'prop-types';

const BoxArrowUpLeft = (props) => {
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
        d="M16.5 15a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 15v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-4a.5.5 0 010-1h4A1.5 1.5 0 0116.5 7v8zm-7-11a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v5a.5.5 0 001 0V4.5H9a.5.5 0 00.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M3.646 3.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoxArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowUpLeft;
