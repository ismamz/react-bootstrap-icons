import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowInUpLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M1.5 3A1.5 1.5 0 013 1.5h10A1.5 1.5 0 0114.5 3v5a.5.5 0 01-1 0V3a.5.5 0 00-.5-.5H3a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h4a.5.5 0 010 1H3A1.5 1.5 0 011.5 13V3z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.5 6a.5.5 0 00-.5-.5H6a.5.5 0 00-.5.5v5a.5.5 0 001 0V6.5H11a.5.5 0 00.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.646 5.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
});

BoxArrowInUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowInUpLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowInUpLeft;
