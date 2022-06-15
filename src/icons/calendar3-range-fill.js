import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar3RangeFill = forwardRef(
  ({
    color, size, title, ...rest
  }, ref) => {
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
        {title ? <title>{title}</title> : null}

        <path
          fillRule="evenodd"
          d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2H0z"
        />
      </svg>
    );
  },
);

Calendar3RangeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Calendar3RangeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Calendar3RangeFill;
