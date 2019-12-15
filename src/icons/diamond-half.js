import React from 'react';
import PropTypes from 'prop-types';

const DiamondHalf = (props) => {
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
        d="M8.94 2.354a1.5 1.5 0 012.12 0l6.586 6.585a1.5 1.5 0 010 2.122l-6.585 6.585a1.5 1.5 0 01-2.122 0l-6.585-6.585a1.5 1.5 0 010-2.122l6.585-6.585zm1.06.56a.498.498 0 00-.354.147L3.061 9.646a.5.5 0 000 .707l6.585 6.586a.499.499 0 00.354.147V2.914z"
        clipRule="evenodd"
      />
    </svg>
  );
};

DiamondHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiamondHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default DiamondHalf;
