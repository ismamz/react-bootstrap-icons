import React from 'react';
import PropTypes from 'prop-types';

const GridFill = (props) => {
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
      <rect width="6" height="6" x="3.5" y="10.5" rx="1" />
      <rect width="6" height="6" x="10.5" y="10.5" rx="1" />
      <rect width="6" height="6" x="10.5" y="3.5" rx="1" />
      <rect width="6" height="6" x="3.5" y="3.5" rx="1" />
    </svg>
  );
};

GridFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GridFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default GridFill;
