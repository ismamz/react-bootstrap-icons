import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EmojiSurpriseFill = forwardRef(({
  color, size, title, ...rest
}, ref) => {
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
      {title ? <title>{title}</title> : null}

      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7 5.5C7 4.672 6.552 4 6 4s-1 .672-1 1.5S5.448 7 6 7s1-.672 1-1.5Zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 7 10 7s1-.672 1-1.5ZM8 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
});

EmojiSurpriseFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

EmojiSurpriseFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default EmojiSurpriseFill;
