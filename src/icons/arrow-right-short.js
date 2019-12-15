import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightShort = (props) => {
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
        d="M10.146 6.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 10l-2.647-2.646a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6 10a.5.5 0 01.5-.5H13a.5.5 0 010 1H6.5A.5.5 0 016 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowRightShort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowRightShort.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowRightShort;
