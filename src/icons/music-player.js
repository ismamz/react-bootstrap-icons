import React from 'react';
import PropTypes from 'prop-types';

const MusicPlayer = (props) => {
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
        d="M14 3H6a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zM6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M13 5H7v3h6V5zM7 4a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1H7zm3 11a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      />
      <circle cx="10" cy="13" r="1" />
    </svg>
  );
};

MusicPlayer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MusicPlayer.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MusicPlayer;
