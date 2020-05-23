import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileBreak = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
      />
      <path d="M12 1H4a2 2 0 0 0-2 2v6h1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6h1V3a2 2 0 0 0-2-2zm2 11h-1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1H2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1z" />
    </svg>
  );
});

FileBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileBreak.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileBreak;
