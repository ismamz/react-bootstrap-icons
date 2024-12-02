import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UsbC = forwardRef(
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
        className={['bi', 'bi-usb-c', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
        <path d="M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4z" />
      </svg>
    );
  },
);

UsbC.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default UsbC;
