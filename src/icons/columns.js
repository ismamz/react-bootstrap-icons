import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Columns = forwardRef(
  ({
    color, size, title, className, ...rest
  }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill={color}
        className={['bi', 'bi-columns', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm8.5 0v8H15V2zm0 9v3H15v-3zm-1-9H1v3h6.5zM1 14h6.5V6H1z" />
      </svg>
    );
  },
);

Columns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

Columns.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default Columns;
