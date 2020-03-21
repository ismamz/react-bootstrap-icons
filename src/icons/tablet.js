import React from 'react';
import PropTypes from 'prop-types';

const Tablet = (props) => {
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
        d="M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 14a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tablet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Tablet;
