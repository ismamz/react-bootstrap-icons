import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BatteryFull = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"
      />
      <path d="M2 6h10v4H2V6zm12.5 3.5a1.5 1.5 0 0 0 0-3v3z" />
    </svg>
  );
});

BatteryFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatteryFull.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BatteryFull;
