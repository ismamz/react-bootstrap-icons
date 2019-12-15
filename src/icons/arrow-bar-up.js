import React from 'react';
import PropTypes from 'prop-types';

const ArrowBarUp = (props) => {
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
        d="M13.354 7.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L10 5.207l2.646 2.647a.5.5 0 00.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 12a.5.5 0 00.5-.5V5a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-6 2.75a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowBarUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowBarUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowBarUp;
