import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShieldSlashFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M1.357 3.478c-.42 3.969.87 6.928 2.423 8.911a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586.466-.32.983-.74 1.502-1.263L1.357 3.478zm11.787 7.545c1.145-1.984 1.902-4.644 1.444-8a1.454 1.454 0 0 0-1.003-1.183 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5c-.662 0-1.77.249-2.813.525-.548.145-1.1.303-1.59.45l9.547 9.548z" />
      <path
        fillRule="evenodd"
        d="M14.646 15.354l-14-14 .708-.708 14 14-.707.707z"
      />
    </svg>
  );
});

ShieldSlashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShieldSlashFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ShieldSlashFill;
