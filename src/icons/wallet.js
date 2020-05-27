import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wallet = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M2 4v8.5A1.5 1.5 0 0 0 3.5 14h10a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 1 1 0v8a1.5 1.5 0 0 1-1.5 1.5h-10A2.5 2.5 0 0 1 1 12.5V4h1z"
      />
      <path
        fillRule="evenodd"
        d="M1 4a2 2 0 0 1 2-2h11.5a.5.5 0 0 1 0 1H3a1 1 0 0 0 0 2h11.5v1H3a2 2 0 0 1-2-2z"
      />
      <path fillRule="evenodd" d="M13 5V3h1v2h-1z" />
    </svg>
  );
});

Wallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wallet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Wallet;
