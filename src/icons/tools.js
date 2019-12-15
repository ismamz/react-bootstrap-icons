import React from 'react';
import PropTypes from 'prop-types';

const Tools = (props) => {
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
        d="M2 3l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L12.5 11.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023l.305-.914-5.707-5.707a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L2 3zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M17.898 4.223a3.003 3.003 0 01-3.679 3.674L7.878 14.15a3 3 0 11-2.027-2.027l6.252-6.341a3 3 0 013.675-3.68l-2.142 2.142L14 6l1.757.364 2.141-2.141zm-13.37 9.019L5 13l.471.242.529.026.287.445.445.287.026.529L7 15l-.242.471-.026.529-.445.287-.287.445-.529.026L5 17l-.471-.242L4 16.732l-.287-.445L3.268 16l-.026-.529L3 15l.242-.471.026-.529.445-.287.287-.445.529-.026z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Tools.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tools.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Tools;
