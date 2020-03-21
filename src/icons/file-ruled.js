import React from 'react';
import PropTypes from 'prop-types';

const FileRuled = (props) => {
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
        d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
        clipRule="evenodd"
      />
      <path stroke="#000" d="M3 5.5h10m-10 3h10m-10 3h10M5.5 6v8" />
    </svg>
  );
};

FileRuled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileRuled.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileRuled;
