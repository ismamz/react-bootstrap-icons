import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ThunderboltFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M1 3a1 1 0 0 0-1 1v7.293A1 1 0 0 0 .293 12L2 13.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293L15.707 12a1 1 0 0 0 .293-.707V4a1 1 0 0 0-1-1H1Zm2.5 3h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
    </svg>
  );
});

ThunderboltFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThunderboltFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ThunderboltFill;
