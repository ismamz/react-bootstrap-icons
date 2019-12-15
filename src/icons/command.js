import React from 'react';
import PropTypes from 'prop-types';

const Command = (props) => {
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
        d="M4 5.5A1.5 1.5 0 005.5 7H7V5.5a1.5 1.5 0 10-3 0zM8 8V5.5A2.5 2.5 0 105.5 8H8zm8-2.5A1.5 1.5 0 0114.5 7H13V5.5a1.5 1.5 0 013 0zM12 8V5.5A2.5 2.5 0 1114.5 8H12zm-8 6.5A1.5 1.5 0 015.5 13H7v1.5a1.5 1.5 0 01-3 0zM8 12v2.5A2.5 2.5 0 115.5 12H8zm8 2.5a1.5 1.5 0 00-1.5-1.5H13v1.5a1.5 1.5 0 003 0zM12 12v2.5a2.5 2.5 0 102.5-2.5H12z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12 8H8v4h4V8zM7 7v6h6V7H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Command.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Command;
