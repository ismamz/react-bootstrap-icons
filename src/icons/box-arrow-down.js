import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowDown = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4.646 11.646a.5.5 0 0 1 .708 0L8 14.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
      />
      <path
        fillRule="evenodd"
        d="M8 4.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M2.5 2A1.5 1.5 0 0 1 4 .5h8A1.5 1.5 0 0 1 13.5 2v7a1.5 1.5 0 0 1-1.5 1.5h-1.5a.5.5 0 0 1 0-1H12a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 1 0 1H4A1.5 1.5 0 0 1 2.5 9V2z"
      />
    </svg>
  );
});

BoxArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowDown;
