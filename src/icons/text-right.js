import React from 'react';
import PropTypes from 'prop-types';

const TextRight = (props) => {
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
        stroke="#000"
        strokeLinecap="round"
        d="M8.5 14.5h7m-11-3h11m-7-3h7m-11-3h11"
      />
    </svg>
  );
};

TextRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TextRight;
