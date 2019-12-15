import React from 'react';
import PropTypes from 'prop-types';

const Trophy = (props) => {
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
      <path d="M5 3h10c-.495 3.467-.5 10-5 10S5.495 6.467 5 3zm0 15a1 1 0 011-1h8a1 1 0 011 1H5zm2-1a1 1 0 011-1h4a1 1 0 011 1H7z" />
      <path
        fillRule="evenodd"
        d="M14.5 5a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z"
        clipRule="evenodd"
      />
      <path d="M9 12h2v4H9v-4z" />
      <path d="M12 13c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z" />
    </svg>
  );
};

Trophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Trophy.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Trophy;
