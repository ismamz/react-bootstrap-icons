import React from 'react';
import PropTypes from 'prop-types';

const BackspaceFill = (props) => {
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
        d="M17.683 5a2 2 0 00-2-2h-7.08a2 2 0 00-1.519.698L2.241 9.35a1 1 0 000 1.302l4.843 5.65A2 2 0 008.603 17h7.08a2 2 0 002-2V5zM7.829 7.854a.5.5 0 11.707-.708l2.147 2.147 2.146-2.147a.5.5 0 11.707.708L11.39 10l2.146 2.146a.5.5 0 01-.707.708l-2.146-2.147-2.147 2.147a.5.5 0 01-.707-.708L9.976 10 7.829 7.854z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BackspaceFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BackspaceFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BackspaceFill;
