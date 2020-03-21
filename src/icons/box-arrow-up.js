import React from 'react';
import PropTypes from 'prop-types';

const BoxArrowUp = (props) => {
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
        d="M4.646 4.354a.5.5 0 00.708 0L8 1.707l2.646 2.647a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 11.5a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v9a.5.5 0 00.5.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2.5 14A1.5 1.5 0 004 15.5h8a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0012 5.5h-1.5a.5.5 0 000 1H12a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V7a.5.5 0 01.5-.5h1.5a.5.5 0 000-1H4A1.5 1.5 0 002.5 7v7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoxArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowUp;
