import React from 'react';
import PropTypes from 'prop-types';

const MusicPlayerFill = (props) => {
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
        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 1a1 1 0 011-1h6a1 1 0 011 1v2.5a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm7 8a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      />
      <circle cx="10" cy="13" r="1" />
    </svg>
  );
};

MusicPlayerFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MusicPlayerFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MusicPlayerFill;
