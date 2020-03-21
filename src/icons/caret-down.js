import React from 'react';
import PropTypes from 'prop-types';

const CaretDown = (props) => {
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
        d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 001.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 00-.753 1.659z"
        clipRule="evenodd"
      />
    </svg>
  );
};

CaretDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CaretDown;
