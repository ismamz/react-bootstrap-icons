import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileBreakFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 0H4a2 2 0 0 0-2 2v7h12V2a2 2 0 0 0-2-2zm2 12H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2zM0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

FileBreakFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileBreakFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileBreakFill;
