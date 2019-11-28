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
        d="M3.5 5A1.5 1.5 0 005 6.5h1.5V5a1.5 1.5 0 10-3 0zm4 2.5V5A2.5 2.5 0 105 7.5h2.5zm9-2.5A1.5 1.5 0 0115 6.5h-1.5V5a1.5 1.5 0 013 0zm-4 2.5V5A2.5 2.5 0 1115 7.5h-2.5zm-9 7.5A1.5 1.5 0 015 13.5h1.5V15a1.5 1.5 0 01-3 0zm4-2.5V15A2.5 2.5 0 115 12.5h2.5zm9 2.5a1.5 1.5 0 00-1.5-1.5h-1.5V15a1.5 1.5 0 003 0zm-4-2.5V15a2.5 2.5 0 102.5-2.5h-2.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.5 7.5h-5v5h5v-5zm-6-1v7h7v-7h-7z"
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
