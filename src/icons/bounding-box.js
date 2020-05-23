import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoundingBox = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1H5v2H3v6h2v2h6v-2h2V5h-2V3zm1-2v3h3V1h-3zm3 11h-3v3h3v-3zM4 15v-3H1v3h3zM1 4h3V1H1v3z"
      />
    </svg>
  );
});

BoundingBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoundingBox.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoundingBox;
