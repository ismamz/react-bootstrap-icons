import React from 'react';
import PropTypes from 'prop-types';

const BoxArrowBottomRight = (props) => {
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
        d="M5 3.5A1.5 1.5 0 003.5 5v8A1.5 1.5 0 005 14.5h4a.5.5 0 000-1H5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v4a.5.5 0 001 0V5A1.5 1.5 0 0013 3.5H5zm11 7a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h4.5V11a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M16.354 16.354a.5.5 0 01-.708 0l-8-8a.5.5 0 11.708-.708l8 8a.5.5 0 010 .708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoxArrowBottomRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowBottomRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowBottomRight;
