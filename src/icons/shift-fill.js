import React from 'react';
import PropTypes from 'prop-types';

const ShiftFill = (props) => {
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
        d="M9.27 4.047a1 1 0 011.46 0l6.345 6.769c.6.639.146 1.684-.73 1.684H13.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 4.047z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShiftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShiftFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ShiftFill;
