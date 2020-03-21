import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRight = (props) => {
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
        d="M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpRight;
