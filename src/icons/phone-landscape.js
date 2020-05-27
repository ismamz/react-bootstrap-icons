import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PhoneLandscape = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M1 4.5v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6z"
      />
      <path fillRule="evenodd" d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
    </svg>
  );
});

PhoneLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneLandscape.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PhoneLandscape;
