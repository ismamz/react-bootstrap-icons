import React from 'react';
import PropTypes from 'prop-types';

const CapslockFill = (props) => {
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
        d="M9.27 3.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H13.5v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 3.047zM6.5 15.5a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

CapslockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CapslockFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CapslockFill;
