import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M3.5 13a3.5 3.5 0 1 1 .59-6.95 5.002 5.002 0 1 1 9.804 1.98A2.5 2.5 0 0 1 13.5 13h-10z"
      />
    </svg>
  );
});

CloudFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CloudFill;
