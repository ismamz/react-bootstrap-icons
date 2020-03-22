import React from 'react';
import PropTypes from 'prop-types';

const FileDiff = (props) => {
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
        d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.5 10.5A.5.5 0 016 10h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM8 4a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 018 4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.5 6.5A.5.5 0 016 6h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FileDiff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileDiff.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileDiff;
