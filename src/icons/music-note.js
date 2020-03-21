import React from 'react';
import PropTypes from 'prop-types';

const MusicNote = (props) => {
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
      <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
      <path fillRule="evenodd" d="M9 3v10H8V3h1z" clipRule="evenodd" />
      <path d="M8 2.82a1 1 0 01.804-.98l3-.6A1 1 0 0113 2.22V4L8 5V2.82z" />
    </svg>
  );
};

MusicNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MusicNote.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MusicNote;
