import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BarChartLineFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <rect width="4" height="5" x="1" y="10" rx="1" />
      <rect width="4" height="9" x="6" y="6" rx="1" />
      <rect width="4" height="14" x="11" y="1" rx="1" />
      <path
        fillRule="evenodd"
        d="M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

BarChartLineFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarChartLineFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BarChartLineFill;
