import React from 'react';
import PropTypes from 'prop-types';

const XCircle = (props) => {
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
        d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.646 13.354l-6-6 .708-.708 6 6-.708.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.354 13.354l6-6-.708-.708-6 6 .708.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

XCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default XCircle;
