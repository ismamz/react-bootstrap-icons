import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkDiff = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
      <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
      <path
        fillRule="evenodd"
        d="M5.5 11.5A.5.5 0 0 1 6 11h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM8 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 8 5z"
      />
      <path
        fillRule="evenodd"
        d="M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

FileEarmarkDiff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkDiff.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkDiff;
