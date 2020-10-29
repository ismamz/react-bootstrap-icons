import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileWordFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5.485 4.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 7.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242L9.479 9.023l-.997-3.655a.5.5 0 0 0-.964 0L6.52 9.023 5.485 4.879z"
      />
    </svg>
  );
});

FileWordFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileWordFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileWordFill;
