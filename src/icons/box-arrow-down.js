import React from 'react';
import PropTypes from 'prop-types';

const BoxArrowDown = (props) => {
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
        d="M6.646 13.646a.5.5 0 01.708 0L10 16.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 6.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4.5 4A1.5 1.5 0 016 2.5h8A1.5 1.5 0 0115.5 4v7a1.5 1.5 0 01-1.5 1.5h-1.5a.5.5 0 010-1H14a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5H6a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h1.5a.5.5 0 010 1H6A1.5 1.5 0 014.5 11V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoxArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowDown;
