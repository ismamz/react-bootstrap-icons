import React from 'react';
import PropTypes from 'prop-types';

const MusicPlayerFill = (props) => {
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
        d="M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 1a1 1 0 011-1h6a1 1 0 011 1v2.5a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm7 8a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      />
      <circle cx="8" cy="11" r="1" />
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
