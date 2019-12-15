import React from 'react';
import PropTypes from 'prop-types';

const Stopwatch = (props) => {
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
        d="M10 17a6 6 0 100-12 6 6 0 000 12zm0 1a7 7 0 100-14 7 7 0 000 14z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 6.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6.5a.5.5 0 010-1h3V7a.5.5 0 01.5-.5zm-2.5-4A.5.5 0 018 2h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
      <path d="M9 3h2v2H9V3z" />
    </svg>
  );
};

Stopwatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stopwatch.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Stopwatch;
