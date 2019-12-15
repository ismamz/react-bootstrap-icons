import React from 'react';
import PropTypes from 'prop-types';

const Columns = (props) => {
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
        d="M17 4H3v12h14V4zM3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.5 16V4h1v12h-1zm0-8H3V7h6.5v1zm7.5 5h-6.5v-1H17v1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Columns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Columns.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Columns;
