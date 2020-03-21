import React from 'react';
import PropTypes from 'prop-types';

const MusicNoteBeamed = (props) => {
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
      <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
      <path
        fillRule="evenodd"
        d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
        clipRule="evenodd"
      />
      <path d="M5 2.905a1 1 0 01.9-.995l8-.8a1 1 0 011.1.995V3L5 4V2.905z" />
    </svg>
  );
};

MusicNoteBeamed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MusicNoteBeamed.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MusicNoteBeamed;
