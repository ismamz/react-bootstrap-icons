import React from 'react';
import PropTypes from 'prop-types';

const ChatFill = (props) => {
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
        d="M7.5 14s.65.65.117 1.948A4.821 4.821 0 017 17c.449 0 .887-.067 1.307-.181C10.692 16.169 12.5 14 12.5 14a5.5 5.5 0 100-11h-5a5.5 5.5 0 100 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChatFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChatFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ChatFill;
