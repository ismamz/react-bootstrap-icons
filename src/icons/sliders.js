import React from 'react';
import PropTypes from 'prop-types';

const Sliders = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M0 0h16v16H0z" />
      <path
        fillRule="evenodd"
        d="M14 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM11.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM4.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9.5 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM11.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.5 4H0V3h9.5v1zM16 4h-2.5V3H16v1zM9.5 14H0v-1h9.5v1zm6.5 0h-2.5v-1H16v1zM6.5 9H16V8H6.5v1zM0 9h2.5V8H0v1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Sliders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sliders.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Sliders;
