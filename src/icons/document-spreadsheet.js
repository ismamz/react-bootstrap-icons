import React from 'react';
import PropTypes from 'prop-types';

const DocumentSpreadsheet = (props) => {
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
        d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M15 8H5V7h10v1zm0 3H5v-1h10v1zm0 3H5v-1h10v1z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7 16V8h1v8H7zm4 0V8h1v8h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

DocumentSpreadsheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DocumentSpreadsheet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default DocumentSpreadsheet;
