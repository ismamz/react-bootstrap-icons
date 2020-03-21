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
      <path
        fillRule="evenodd"
        d="M3.5 6.5A.5.5 0 014 7v1a4 4 0 008 0V7a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 8V3a2 2 0 10-4 0v5a2 2 0 104 0zM8 0a3 3 0 00-3 3v5a3 3 0 006 0V3a3 3 0 00-3-3z"
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
