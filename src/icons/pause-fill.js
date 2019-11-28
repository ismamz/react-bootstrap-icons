import React from 'react';
import PropTypes from 'prop-types';

const PauseFill = (props) => {
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
      <path d="M7.5 5.5A1.5 1.5 0 019 7v6a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0114 7v6a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5z" />
    </svg>
  );
};

PauseFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PauseFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PauseFill;
