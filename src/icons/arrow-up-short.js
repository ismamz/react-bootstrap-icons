import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpShort = (props) => {
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
        d="M10 7.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V8a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.646 6.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L10 7.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpShort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpShort.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowUpShort;
