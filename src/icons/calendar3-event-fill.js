import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar3EventFill = forwardRef(
  (
    {
      color = 'currentColor',
      size = '1em',
      title = null,
      className = '',
      ...rest
    },
    ref,
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill={color}
        className={['bi', 'bi-calendar3-event-fill', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3h16zm-3-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-5a2 2 0 0 1 2 2H0a2 2 0 0 1 2-2z" />
      </svg>
    );
  },
);

Calendar3EventFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Calendar3EventFill;
