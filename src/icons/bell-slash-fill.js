import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BellSlashFill = forwardRef(
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
        className={['bi', 'bi-bell-slash-fill', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M5.164 14H15c-1.5-1-2-5.902-2-7q0-.396-.06-.776zm6.288-10.617A5 5 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5 5 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113zM10 15a2 2 0 1 1-4 0zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75z" />
      </svg>
    );
  },
);

BellSlashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default BellSlashFill;
