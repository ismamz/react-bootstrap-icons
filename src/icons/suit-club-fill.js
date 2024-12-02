import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SuitClubFill = forwardRef(
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
        className={['bi', 'bi-suit-club-fill', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5" />
      </svg>
    );
  },
);

SuitClubFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default SuitClubFill;
