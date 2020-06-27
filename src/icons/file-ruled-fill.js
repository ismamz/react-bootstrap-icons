import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileRuledFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 1H4a2 2 0 0 0-2 2v2h12V3a2 2 0 0 0-2-2zm2 5H6v2h8V6zm0 3H6v2h8V9zm0 3H6v3h6a2 2 0 0 0 2-2v-1zm-9 3v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3V9H2v2zm0-3h3V6H2v2z"
      />
    </svg>
  );
});

FileRuledFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileRuledFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileRuledFill;
