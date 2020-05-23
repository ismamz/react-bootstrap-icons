import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarMinusFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm6 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
      />
    </svg>
  );
});

CalendarMinusFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarMinusFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CalendarMinusFill;
