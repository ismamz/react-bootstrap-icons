import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Subtract = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M4 12v2.5A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4H12v6.5a1.5 1.5 0 0 1-1.5 1.5H4z" />
      <path
        fillRule="evenodd"
        d="M10.5 1h-9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-9-1A1.5 1.5 0 0 0 0 1.5v9A1.5 1.5 0 0 0 1.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 0h-9z"
      />
    </svg>
  );
});

Subtract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Subtract.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Subtract;
