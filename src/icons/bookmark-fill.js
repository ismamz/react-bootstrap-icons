import React from 'react';
import PropTypes from 'prop-types';

const BookmarkFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M3 3a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BookmarkFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookmarkFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BookmarkFill;
