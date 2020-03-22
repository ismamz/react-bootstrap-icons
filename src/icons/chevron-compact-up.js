import React from 'react';
import PropTypes from 'prop-types';

const ChevronCompactUp = (props) => {
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
        d="M7.776 5.553a.5.5 0 01.448 0l6 3a.5.5 0 11-.448.894L8 6.56 2.224 9.447a.5.5 0 11-.448-.894l6-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronCompactUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronCompactUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ChevronCompactUp;
