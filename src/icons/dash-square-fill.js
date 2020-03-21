import React from 'react';
import PropTypes from 'prop-types';

const DashSquareFill = (props) => {
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
        d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm2 7.5a.5.5 0 000 1h8a.5.5 0 000-1H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

DashSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashSquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default DashSquareFill;
