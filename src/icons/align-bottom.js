import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignBottom = forwardRef(({
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

      <rect width="4" height="12" x="6" y="1" rx="1" />
      <path d="M1.5 14a.5.5 0 0 0 0 1v-1zm13 1a.5.5 0 0 0 0-1v1zm-13 0h13v-1h-13v1z" />
    </svg>
  );
});

AlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

AlignBottom.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default AlignBottom;
