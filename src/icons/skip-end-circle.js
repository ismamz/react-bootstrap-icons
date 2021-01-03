import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SkipEndCircle = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038L9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
    </svg>
  );
});

SkipEndCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipEndCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipEndCircle;
