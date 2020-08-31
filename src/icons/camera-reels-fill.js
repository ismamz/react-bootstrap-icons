import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CameraReelsFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8z"
      />
      <circle cx="3" cy="3" r="3" />
      <circle cx="9" cy="3" r="3" />
    </svg>
  );
});

CameraReelsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CameraReelsFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CameraReelsFill;
