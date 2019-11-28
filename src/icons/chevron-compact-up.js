import React from 'react';
import PropTypes from 'prop-types';

const ChevronCompactUp = (props) => {
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
        d="M9.776 7.553a.5.5 0 01.448 0l6 3a.5.5 0 11-.448.894L10 8.56l-5.776 2.888a.5.5 0 11-.448-.894l6-3z"
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
