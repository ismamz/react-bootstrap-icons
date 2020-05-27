import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CollectionFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <rect
        width="16"
        height="10"
        rx="1.5"
        transform="matrix(1 0 0 -1 0 14.5)"
      />
      <path
        fillRule="evenodd"
        d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
      />
    </svg>
  );
});

CollectionFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CollectionFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CollectionFill;
