import React from 'react';
import PropTypes from 'prop-types';

const Terminal = (props) => {
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
        d="M16 4H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zM4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 11a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3A.5.5 0 018 11zM5.146 6.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L6.793 8.5 5.146 6.854a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Terminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Terminal.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Terminal;
