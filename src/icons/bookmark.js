import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = (props) => {
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
        d="M10 14l5 3V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V5a1 1 0 00-1-1H7a1 1 0 00-1 1v10.234z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bookmark.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bookmark;
