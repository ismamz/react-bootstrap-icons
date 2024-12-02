import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SignNoParkingFill = forwardRef(
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
        className={['bi', 'bi-sign-no-parking-fill', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M13.292 14A8 8 0 0 1 2 2.707l3.5 3.5V12h1.283V9.164h1.674zm.708-.708-4.37-4.37C10.5 8.524 11 7.662 11 6.587c0-1.482-.955-2.584-2.538-2.584H5.5v.79L2.708 2.002A8 8 0 0 1 14 13.293Z" />
        <path d="M6.777 7.485v.59h.59zm1.949.535L6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433Z" />
      </svg>
    );
  },
);

SignNoParkingFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default SignNoParkingFill;
