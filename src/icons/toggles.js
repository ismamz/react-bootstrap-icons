import React from 'react';
import PropTypes from 'prop-types';

const Toggles = (props) => {
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
        d="M11.5 1h-7a2.5 2.5 0 000 5h7a2.5 2.5 0 000-5zm-7-1a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm0 9a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm7 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM4.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Toggles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggles.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Toggles;
