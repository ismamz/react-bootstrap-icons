import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Speaker = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
      <path
        fillRule="evenodd"
        d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
      />
    </svg>
  );
});

Speaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Speaker.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Speaker;
