import React from 'react';
import PropTypes from 'prop-types';

const ClockFill = (props) => {
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
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM5.5 9.5h4v-5a.5.5 0 011 0V10a.5.5 0 01-.5.5H5.5a.5.5 0 010-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ClockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ClockFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ClockFill;
