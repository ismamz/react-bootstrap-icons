import React from 'react';
import PropTypes from 'prop-types';

const Wrench = (props) => {
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
        d="M2.102 4.223A3.004 3.004 0 005 8c.27 0 .532-.036.78-.103l6.342 6.252A3.003 3.003 0 0015 18a3 3 0 10-.851-5.878L7.897 5.781A3.004 3.004 0 004.223 2.1l2.141 2.142L6 6l-1.757.364-2.141-2.141zm13.37 9.019L15 13l-.471.242-.529.026-.287.445-.445.287-.026.529L13 15l.242.471.026.529.445.287.287.445.529.026L15 17l.471-.242.529-.026.287-.445.445-.287.026-.529L17 15l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Wrench.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wrench.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Wrench;
