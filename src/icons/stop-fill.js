import React from 'react';
import PropTypes from 'prop-types';

const StopFill = (props) => {
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
      <path d="M7 5.5h6A1.5 1.5 0 0114.5 7v6a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 13V7A1.5 1.5 0 017 5.5z" />
    </svg>
  );
};

StopFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StopFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default StopFill;
