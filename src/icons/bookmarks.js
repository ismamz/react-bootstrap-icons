import React from 'react';
import PropTypes from 'prop-types';

const Bookmarks = (props) => {
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
        d="M7 13l5 3V4a2 2 0 00-2-2H4a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 00-1-1H4a1 1 0 00-1 1v10.234z"
        clipRule="evenodd"
      />
      <path d="M14 14l-1-.6V2a1 1 0 00-1-1H4.268A2 2 0 016 0h6a2 2 0 012 2v12z" />
    </svg>
  );
};

Bookmarks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bookmarks.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bookmarks;
