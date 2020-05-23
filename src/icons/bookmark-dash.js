import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BookmarkDash = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zM4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4z"
      />
    </svg>
  );
});

BookmarkDash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookmarkDash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BookmarkDash;
