import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SegmentedNav = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M14 5H6v4h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"
      />
      <path fillRule="evenodd" d="M10 9V5h1v4h-1z" />
    </svg>
  );
});

SegmentedNav.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SegmentedNav.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SegmentedNav;
