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
        d="M5.5 7A1.5 1.5 0 017 5.5h6A1.5 1.5 0 0114.5 7v6a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 13V7zM7 6.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H7z"
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
