import React from 'react';
import PropTypes from 'prop-types';

const PlusCircle = (props) => {
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
        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
        clipRule="evenodd"
      />
    </svg>
  );
};

PlusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlusCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PlusCircle;
