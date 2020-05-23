import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pentagon = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 1.288l-6.842 5.56L3.733 15h8.534l2.575-8.153L8 1.288zM16 6.5L8 0 0 6.5 3 16h10l3-9.5z"
      />
    </svg>
  );
});

Pentagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pentagon.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Pentagon;
