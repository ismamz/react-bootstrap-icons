import React from 'react';
import PropTypes from 'prop-types';

const SquareFill = (props) => {
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
      <rect width="16" height="16" rx="2" />
    </svg>
  );
};

SquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SquareFill;
