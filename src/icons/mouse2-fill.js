import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mouse2Fill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z" />
    </svg>
  );
});

Mouse2Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mouse2Fill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Mouse2Fill;
