import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Textarea = forwardRef(({ color, size, ...rest }, ref) => {
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
    </svg>
  );
});

Textarea.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Textarea.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Textarea;
