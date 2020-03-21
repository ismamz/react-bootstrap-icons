import React from 'react';
import PropTypes from 'prop-types';

const Arrow90degLeft = (props) => {
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
        d="M6.104 2.396a.5.5 0 010 .708L3.457 5.75l2.647 2.646a.5.5 0 11-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2.75 5.75a.5.5 0 01.5-.5h6.5a2.5 2.5 0 012.5 2.5v5.5a.5.5 0 01-1 0v-5.5a1.5 1.5 0 00-1.5-1.5h-6.5a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Arrow90degLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Arrow90degLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Arrow90degLeft;
