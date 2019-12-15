import React from 'react';
import PropTypes from 'prop-types';

const PieChart = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.5 9.793V3h1v6.5H17v1h-6.793l-4.853 4.854-.708-.708L9.5 9.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};

PieChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PieChart.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PieChart;
