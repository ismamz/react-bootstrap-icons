import React from 'react';
import PropTypes from 'prop-types';

const ArrowBarLeft = (props) => {
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
        d="M7.854 6.646a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L5.207 10l2.647-2.646a.5.5 0 000-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12 10a.5.5 0 00-.5-.5H5a.5.5 0 000 1h6.5a.5.5 0 00.5-.5zm2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowBarLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowBarLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowBarLeft;
