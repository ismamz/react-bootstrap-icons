import React from 'react';
import PropTypes from 'prop-types';

const LayoutWtf = (props) => {
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
      <path
        fillRule="evenodd"
        d="M5 1H1v8h4V1zM1 0a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V1a1 1 0 00-1-1H1zm13 2H9v5h5V2zM9 1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V2a1 1 0 00-1-1H9zM5 13H3v2h2v-2zm-2-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H3zm12-1H9v2h6v-2zm-6-1a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};

LayoutWtf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayoutWtf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LayoutWtf;
