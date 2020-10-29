import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkPptFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.5 6a.5.5 0 0 0-1 0v7.5a.5.5 0 0 0 1 0v-2.764a3 3 0 1 0 0-4.472V6zm0 2.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
      />
    </svg>
  );
});

FileEarmarkPptFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkPptFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkPptFill;
