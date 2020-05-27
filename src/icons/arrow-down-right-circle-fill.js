import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownRightCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-9.5 3h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.793L5.854 5.146a.5.5 0 1 0-.708.708L9.293 10H6.5a.5.5 0 0 0 0 1z"
      />
    </svg>
  );
});

ArrowDownRightCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownRightCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownRightCircleFill;
