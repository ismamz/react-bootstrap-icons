import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hdmi = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M2.5 7a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z" />
      <path d="M1 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.293l.707.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293l.707-.707H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 1h14v3h-.293a1 1 0 0 0-.707.293l-.707.707H2.707L2 9.293A1 1 0 0 0 1.293 9H1V6Z" />
    </svg>
  );
});

Hdmi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hdmi.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Hdmi;
