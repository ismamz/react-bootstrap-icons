import React from 'react';
import PropTypes from 'prop-types';

const DashCircleFill = (props) => {
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
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zM4 7.5a.5.5 0 000 1h8a.5.5 0 000-1H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

DashCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default DashCircleFill;
