import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Toggle2On = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z" />
      <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z" />
    </svg>
  );
});

Toggle2On.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggle2On.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Toggle2On;
