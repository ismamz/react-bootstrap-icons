import React from 'react';
import PropTypes from 'prop-types';

const ToggleOff = (props) => {
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
        d="M13 6a4 4 0 010 8h-3a4.992 4.992 0 002-4 4.992 4.992 0 00-2-4h3zm-6 8a4 4 0 110-8 4 4 0 010 8zm-5-4a5 5 0 005 5h6a5 5 0 000-10H7a5 5 0 00-5 5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ToggleOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ToggleOff.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ToggleOff;
