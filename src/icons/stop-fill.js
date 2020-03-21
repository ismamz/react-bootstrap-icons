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
      <path d="M5 3.5h6A1.5 1.5 0 0112.5 5v6a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 11V5A1.5 1.5 0 015 3.5z" />
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
