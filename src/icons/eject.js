import React from 'react';
import PropTypes from 'prop-types';

const Eject = (props) => {
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
        d="M9.27 3.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H3.656c-.876 0-1.33-1.045-.73-1.684L9.27 3.047zm7.076 7.453L10 3.731 3.654 10.5h12.692zM2.5 13.5a1 1 0 011-1h13a1 1 0 011 1v1a1 1 0 01-1 1h-13a1 1 0 01-1-1v-1zm14 0h-13v1h13v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Eject.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eject.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Eject;
