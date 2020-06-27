import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarRangeFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v2h-6a1 1 0 0 0 0 2h6v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2h5a1 1 0 1 0 0-2H0V5z"
      />
    </svg>
  );
});

CalendarRangeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarRangeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CalendarRangeFill;
