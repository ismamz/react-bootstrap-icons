import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = (props) => {
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
        d="M10 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L10 5.707 7.354 8.354a.5.5 0 11-.708-.708l3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUp;
