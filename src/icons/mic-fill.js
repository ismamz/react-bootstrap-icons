import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MicFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M5 3a3 3 0 016 0v5a3 3 0 01-6 0V3z" />
      <path
        fillRule="evenodd"
        d="M3.5 6.5A.5.5 0 014 7v1a4 4 0 008 0V7a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
});

MicFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MicFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MicFill;
