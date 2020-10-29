import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EmojiExpressionlessFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm-5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
      />
    </svg>
  );
});

EmojiExpressionlessFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EmojiExpressionlessFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EmojiExpressionlessFill;
