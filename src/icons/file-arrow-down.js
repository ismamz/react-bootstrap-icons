import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileArrowDown = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4.646 8.146a.5.5 0 0 1 .708 0L8 10.793l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
      />
      <path
        fillRule="evenodd"
        d="M8 4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6A.5.5 0 0 1 8 4z"
      />
    </svg>
  );
});

FileArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileArrowDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileArrowDown;
