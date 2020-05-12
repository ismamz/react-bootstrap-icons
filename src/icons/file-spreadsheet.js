import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileSpreadsheet = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
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
        d="M13 6H3V5h10v1zm0 3H3V8h10v1zm0 3H3v-1h10v1z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5 14V6h1v8H5zm4 0V6h1v8H9z"
        clipRule="evenodd"
      />
    </svg>
  );
});

FileSpreadsheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileSpreadsheet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileSpreadsheet;
