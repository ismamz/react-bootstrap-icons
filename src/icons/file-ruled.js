import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileRuled = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"
      />
      <path
        fillRule="evenodd"
        d="M13 6H3V5h10v1zm0 3H3V8h10v1zm0 3H3v-1h10v1z"
      />
      <path fillRule="evenodd" d="M5 14V6h1v8H5z" />
    </svg>
  );
});

FileRuled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileRuled.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileRuled;
