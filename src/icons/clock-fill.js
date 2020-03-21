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
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
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
