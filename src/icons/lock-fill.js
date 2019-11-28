import React from 'react';
import PropTypes from 'prop-types';

const LockFill = (props) => {
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
      <rect width="11" height="9" x="4.5" y="8" rx="2" />
      <path
        fillRule="evenodd"
        d="M6.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

LockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LockFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LockFill;
