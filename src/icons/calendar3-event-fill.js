import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar3EventFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zm14 3H0v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3zm-2 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
    </svg>
  );
});

Calendar3EventFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar3EventFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Calendar3EventFill;
