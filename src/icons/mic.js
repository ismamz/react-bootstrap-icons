import React from 'react';
import PropTypes from 'prop-types';

const Mic = (props) => {
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
      <path d="M7 5a3 3 0 016 0v5a3 3 0 11-6 0V5z" />
      <path
        fillRule="evenodd"
        d="M5.5 8.5A.5.5 0 016 9v1a4 4 0 008 0V9a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V17h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 015 10V9a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Mic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mic.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Mic;
