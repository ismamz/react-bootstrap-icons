import React from 'react';
import PropTypes from 'prop-types';

const ChevronCompactLeft = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronCompactLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronCompactLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ChevronCompactLeft;
