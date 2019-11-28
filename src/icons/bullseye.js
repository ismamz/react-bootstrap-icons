import React from 'react';
import PropTypes from 'prop-types';

const Bullseye = (props) => {
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
        d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 1a6 6 0 100-12 6 6 0 000 12z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      />
      <path d="M11.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
};

Bullseye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bullseye.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bullseye;
