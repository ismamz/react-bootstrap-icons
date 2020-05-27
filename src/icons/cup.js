import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cup = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 4H4v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4zM3 3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3H3z"
      />
      <path
        fillRule="evenodd"
        d="M14.5 5.5h-2v-1h2A1.5 1.5 0 0 1 16 6v4a1.5 1.5 0 0 1-1.5 1.5h-2v-1h2a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z"
      />
    </svg>
  );
});

Cup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cup.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Cup;
