import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkBreak = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M9 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 5H13v4h1V5L9 0zm5 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2zM0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

FileEarmarkBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkBreak.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkBreak;
