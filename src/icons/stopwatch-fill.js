import React from 'react';
import PropTypes from 'prop-types';

const StopwatchFill = (props) => {
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
        d="M7.5 2.5A.5.5 0 018 2h4a.5.5 0 010 1h-1v1.07A7.002 7.002 0 0110 18 7 7 0 019 4.07V3H8a.5.5 0 01-.5-.5zm3 4.5a.5.5 0 00-1 0v3.5h-3a.5.5 0 000 1H10a.5.5 0 00.5-.5V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

StopwatchFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StopwatchFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default StopwatchFill;
