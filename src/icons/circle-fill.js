import React from 'react';
import PropTypes from 'prop-types';

const CircleFill = (props) => {
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
      <circle cx="8" cy="8" r="8" />
    </svg>
  );
};

CircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CircleFill;
