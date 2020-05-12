import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowInDownLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.5 10a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V5a.5.5 0 011 0v4.5H11a.5.5 0 01.5.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.646 10.354a.5.5 0 010-.708l8-8a.5.5 0 01.708.708l-8 8a.5.5 0 01-.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
});

BoxArrowInDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowInDownLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowInDownLeft;
