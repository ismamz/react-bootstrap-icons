import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkRuled = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path fillRule="evenodd" d="M13 9H3V8h10v1zm0 3H3v-1h10v1z" />
      <path fillRule="evenodd" d="M5 14V9h1v5H5z" />
      <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
      <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
    </svg>
  );
});

FileEarmarkRuled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkRuled.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkRuled;
