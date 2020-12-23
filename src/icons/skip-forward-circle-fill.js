import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SkipForwardCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.79-2.907A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8.5 8.972V10.5a.5.5 0 0 1-.79.407L5 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528l2.71-1.935a.5.5 0 0 1 .79.407v1.528l2.71-1.935z"
      />
    </svg>
  );
});

SkipForwardCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipForwardCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipForwardCircleFill;
