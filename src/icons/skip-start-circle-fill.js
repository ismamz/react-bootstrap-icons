import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SkipStartCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-9.71 2.907a.5.5 0 0 1-.79-.407v-5a.5.5 0 0 1 .79-.407L9 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935z"
      />
    </svg>
  );
});

SkipStartCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipStartCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipStartCircleFill;
