import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EmojiAngry = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fillRule="evenodd"
        d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"
      />
      <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
      <path
        fillRule="evenodd"
        d="M4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 1 1-.447.894l-2-1a.5.5 0 0 1-.223-.67zm7.894 0a.5.5 0 0 0-.67-.223l-2 1a.5.5 0 1 0 .447.894l2-1a.5.5 0 0 0 .223-.67z"
      />
    </svg>
  );
});

EmojiAngry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EmojiAngry.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EmojiAngry;
