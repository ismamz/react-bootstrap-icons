import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = (props) => {
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
        d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ChevronRight;
