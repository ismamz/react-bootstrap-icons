import React from 'react';
import PropTypes from 'prop-types';

const PieChartFill = (props) => {
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
      <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0013.277-5.5zM2 13.292A8 8 0 017.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 008.5.015z" />
    </svg>
  );
};

PieChartFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PieChartFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PieChartFill;
