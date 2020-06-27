import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkBreakFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM2 3a2 2 0 0 1 2-2h5.293a1 1 0 0 1 .707.293L13.707 5a1 1 0 0 1 .293.707V9H2V3zm7 2V2l4 4h-3a1 1 0 0 1-1-1z"
      />
      <path d="M2 13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1H2v1z" />
    </svg>
  );
});

FileEarmarkBreakFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkBreakFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkBreakFill;
