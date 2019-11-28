import React from 'react';
import PropTypes from 'prop-types';

const ChevronCompactRight = (props) => {
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
        d="M8.776 3.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L11.44 10 8.553 4.224a.5.5 0 01.223-.671z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronCompactRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronCompactRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ChevronCompactRight;
