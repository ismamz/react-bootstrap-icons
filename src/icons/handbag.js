import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Handbag = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 1a2 2 0 0 0-2 2v4.5a.5.5 0 0 1-1 0V3a3 3 0 0 1 6 0v4.5a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"
      />
      <path
        fillRule="evenodd"
        d="M3.405 6a.5.5 0 0 0-.498.45l-.912 6.9A1.5 1.5 0 0 0 3.488 15h9.024a1.5 1.5 0 0 0 1.493-1.65l-.913-6.9a.5.5 0 0 0-.497-.45h-9.19zm-1.493.35A1.5 1.5 0 0 1 3.405 5h9.19a1.5 1.5 0 0 1 1.493 1.35L15 13.252A2.5 2.5 0 0 1 12.512 16H3.488A2.5 2.5 0 0 1 1 13.251l.912-6.9z"
      />
    </svg>
  );
});

Handbag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Handbag.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Handbag;
