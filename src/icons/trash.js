import React from 'react';
import PropTypes from 'prop-types';

const Trash = (props) => {
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
        d="M6 6v8.5c0 .47.124.874.297 1.144.177.275.361.356.489.356h6.428c.127 0 .312-.08.489-.356.173-.27.297-.673.297-1.144V6h1v8.5c0 .634-.164 1.23-.456 1.685-.288.448-.747.815-1.33.815H6.786c-.583 0-1.042-.367-1.33-.815C5.164 15.73 5 15.134 5 14.5V6h1z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3-3.5h-11v1h11V4zm-11-1a1 1 0 00-1 1v1a1 1 0 001 1h11a1 1 0 001-1V4a1 1 0 00-1-1h-11z"
        clipRule="evenodd"
      />
      <path d="M8 3a1 1 0 011-1h2a1 1 0 011 1v1H8V3z" />
    </svg>
  );
};

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Trash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Trash;
