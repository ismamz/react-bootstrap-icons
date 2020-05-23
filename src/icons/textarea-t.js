import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TextareaT = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
      <path
        fillRule="evenodd"
        d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v4h-1v-4A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v4h-1v-4zm1 7v4a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-4h1v4A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5v-4h1z"
      />
      <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
    </svg>
  );
});

TextareaT.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextareaT.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TextareaT;
