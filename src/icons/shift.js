import React from 'react';
import PropTypes from 'prop-types';

const Shift = (props) => {
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
        d="M9.27 4.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H13.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 4.047zm7.076 7.453L10 4.731 3.654 11.5H6.5a1 1 0 011 1v3h5v-3a1 1 0 011-1h2.846z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Shift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Shift.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Shift;
