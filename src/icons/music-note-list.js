import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MusicNoteList = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
      <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
      <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
      <path
        fillRule="evenodd"
        d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

MusicNoteList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MusicNoteList.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MusicNoteList;
