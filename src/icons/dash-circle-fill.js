import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DashCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 7.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H4z"
      />
    </svg>
  );
});

DashCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default DashCircleFill;
