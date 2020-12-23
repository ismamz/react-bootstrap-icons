import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RecordBtnFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
    </svg>
  );
});

RecordBtnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RecordBtnFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default RecordBtnFill;
