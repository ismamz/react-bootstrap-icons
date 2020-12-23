import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RecordBtn = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
      />
      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    </svg>
  );
});

RecordBtn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RecordBtn.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default RecordBtn;
