import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeftCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6.5 3h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793l4.146-4.147a.5.5 0 0 1 .708.708L6.707 10H9.5a.5.5 0 0 1 0 1z"
      />
    </svg>
  );
});

ArrowDownLeftCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownLeftCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownLeftCircleFill;
