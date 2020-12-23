import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SkipStartBtnFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm7.71 3.093a.5.5 0 0 1 .79.407v5a.5.5 0 0 1-.79.407L7 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528l2.71-1.935z"
      />
    </svg>
  );
});

SkipStartBtnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipStartBtnFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipStartBtnFill;
