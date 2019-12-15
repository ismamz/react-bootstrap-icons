import React from 'react';
import PropTypes from 'prop-types';

const ArrowsCollapse = (props) => {
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
        d="M4 10a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 014 10zm6-7a.5.5 0 01.5.5V8a.5.5 0 01-1 0V3.5A.5.5 0 0110 3z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.354 5.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L10 7.293l1.646-1.647a.5.5 0 01.708 0zM10 17a.5.5 0 00.5-.5V12a.5.5 0 00-1 0v4.5a.5.5 0 00.5.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.354 14.354a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 00.708.708L10 12.707l1.646 1.647a.5.5 0 00.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowsCollapse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsCollapse.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowsCollapse;
