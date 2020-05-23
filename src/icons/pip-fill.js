import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PipFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm7 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5z"
      />
    </svg>
  );
});

PipFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PipFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PipFill;
