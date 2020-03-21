import React from 'react';
import PropTypes from 'prop-types';

const Stop = (props) => {
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
        d="M3.5 5A1.5 1.5 0 015 3.5h6A1.5 1.5 0 0112.5 5v6a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 11V5zM5 4.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Stop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stop.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Stop;
