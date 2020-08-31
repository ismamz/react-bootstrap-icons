import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BookmarkDashFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm2 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
      />
    </svg>
  );
});

BookmarkDashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookmarkDashFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BookmarkDashFill;
