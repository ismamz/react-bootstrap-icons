import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SignNoParking = forwardRef(({
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

      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm5.29-3.416L9.63 8.923C10.5 8.523 11 7.66 11 6.586c0-1.482-.955-2.584-2.538-2.584H5.5v.79L3.416 2.71a7 7 0 0 1 9.874 9.874Zm-.706.707A7 7 0 0 1 2.71 3.417l2.79 2.79V12h1.283V9.164h1.674l4.127 4.127ZM8.726 8.019 6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433Zm-1.949-.534.59.59h-.59v-.59Z" />
    </svg>
  );
});

SignNoParking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

SignNoParking.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default SignNoParking;
