import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownShort = (props) => {
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
        d="M6.646 9.646a.5.5 0 01.708 0L10 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 6.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownShort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownShort.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownShort;
