import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudSlash = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M3.901 6.023A3.5 3.5 0 1 0 3.5 13h7.379l-1-1H3.5a2.5 2.5 0 1 1 .423-4.965l.964.164.031-.16-1.017-1.016zm10.125 5.882a1.5 1.5 0 0 0-.289-2.886L12.7 8.854l.216-1.028a4 4 0 0 0-6.682-3.714l-.707-.708a5 5 0 0 1 8.368 4.626 2.501 2.501 0 0 1 .88 4.621l-.748-.746z" />
      <path
        fillRule="evenodd"
        d="M13.646 14.354l-12-12 .708-.708 12 12-.707.707z"
      />
    </svg>
  );
});

CloudSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSlash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CloudSlash;
