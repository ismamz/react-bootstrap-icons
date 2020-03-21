import React from 'react';
import PropTypes from 'prop-types';

const XCircleFill = (props) => {
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
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.146-3.146a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z"
        clipRule="evenodd"
      />
    </svg>
  );
};

XCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default XCircleFill;
