import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileSpreadsheetFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 1H4a2 2 0 0 0-2 2v2h12V3a2 2 0 0 0-2-2zm2 5h-4v2h4V6zm0 3h-4v2h4V9zm0 3h-4v3h2a2 2 0 0 0 2-2v-1zm-5 3v-3H6v3h3zm-4 0v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3V9H2v2zm0-3h3V6H2v2zm4 0V6h3v2H6zm0 1h3v2H6V9z"
      />
    </svg>
  );
});

FileSpreadsheetFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileSpreadsheetFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileSpreadsheetFill;
