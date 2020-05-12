import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowDownLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M13 1.5A1.5 1.5 0 0114.5 3v8a1.5 1.5 0 01-1.5 1.5H9a.5.5 0 010-1h4a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5H5a.5.5 0 00-.5.5v4a.5.5 0 01-1 0V3A1.5 1.5 0 015 1.5h8zm-11 7a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 000-1H2.5V9a.5.5 0 00-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1.646 14.354a.5.5 0 00.708 0l8-8a.5.5 0 00-.708-.708l-8 8a.5.5 0 000 .708z"
        clipRule="evenodd"
      />
    </svg>
  );
});

BoxArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowDownLeft;
