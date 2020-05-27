import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowDownRight = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M3 1.5A1.5 1.5 0 0 0 1.5 3v8A1.5 1.5 0 0 0 3 12.5h4a.5.5 0 0 0 0-1H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 1 0V3A1.5 1.5 0 0 0 11 1.5H3zm11 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1 0-1h4.5V9a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M14.354 14.354a.5.5 0 0 1-.708 0l-8-8a.5.5 0 1 1 .708-.708l8 8a.5.5 0 0 1 0 .708z"
      />
    </svg>
  );
});

BoxArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowDownRight;
