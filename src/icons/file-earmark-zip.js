import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkZip = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M5 8.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.11 0l-.929-.62a1 1 0 0 1-.415-1.074L5 9.438V8.5zm2 0H6v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 0 1 7 9.438V8.5z"
      />
      <path d="M6 2h1.5v1H6zM5 3h1.5v1H5zm1 1h1.5v1H6zM5 5h1.5v1H5zm1 1h1.5v1H6V6z" />
    </svg>
  );
});

FileEarmarkZip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkZip.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkZip;
