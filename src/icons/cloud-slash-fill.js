import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudSlashFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M3.901 6.023A3.5 3.5 0 1 0 3.5 13h7.379L3.9 6.023zm10.872 6.629a2.5 2.5 0 0 0-.88-4.621 5 5 0 0 0-8.368-4.626l9.248 9.247z" />
      <path
        fillRule="evenodd"
        d="M13.646 14.354l-12-12 .708-.708 12 12-.707.707z"
      />
    </svg>
  );
});

CloudSlashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSlashFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CloudSlashFill;
