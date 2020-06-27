import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5.707A1 1 0 0 0 13.707 5L10 1.293A1 1 0 0 0 9.293 1H4zm5 1v3a1 1 0 0 0 1 1h3L9 2z"
      />
    </svg>
  );
});

FileEarmarkFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkFill;
