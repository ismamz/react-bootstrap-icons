import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar3RangeFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zm14 3H0v5h6a1 1 0 1 1 0 2H0v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7h-6a1 1 0 1 1 0-2h6V3z"
      />
    </svg>
  );
});

Calendar3RangeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar3RangeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Calendar3RangeFill;
