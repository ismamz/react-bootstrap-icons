import React from 'react';
import PropTypes from 'prop-types';

const UnlockFill = (props) => {
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
      <path d="M2.5 10a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2v-5z" />
      <path
        fillRule="evenodd"
        d="M10.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

UnlockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UnlockFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default UnlockFill;
