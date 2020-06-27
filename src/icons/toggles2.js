import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Toggles2 = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 4a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H4z"
      />
      <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
      <path
        fillRule="evenodd"
        d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"
      />
      <path
        fillRule="evenodd"
        d="M6 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
      />
    </svg>
  );
});

Toggles2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggles2.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Toggles2;
