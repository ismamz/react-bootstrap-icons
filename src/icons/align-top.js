import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignTop = forwardRef(({
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

      <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)" />
      <path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z" />
    </svg>
  );
});

AlignTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

AlignTop.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default AlignTop;
