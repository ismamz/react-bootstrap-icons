import React from 'react';
import PropTypes from 'prop-types';

const Speaker = (props) => {
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
      <path d="M9 4a1 1 0 11-2 0 1 1 0 012 0zm-2.5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      <path
        fillRule="evenodd"
        d="M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm6 4a2 2 0 11-4 0 2 2 0 014 0zM8 7a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Speaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Speaker.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Speaker;
