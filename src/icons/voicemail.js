import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Voicemail = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M7 8.5A3.49 3.49 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5zm-6 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm14 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
      />
    </svg>
  );
});

Voicemail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Voicemail.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Voicemail;
