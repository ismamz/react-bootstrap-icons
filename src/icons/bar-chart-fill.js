import React from 'react';
import PropTypes from 'prop-types';

const BarChartFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
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
    </svg>
  );
};

BarChartFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarChartFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BarChartFill;
