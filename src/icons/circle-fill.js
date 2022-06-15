import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CircleFill = forwardRef(({
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

      <circle cx="8" cy="8" r="8" />
    </svg>
  );
});

CircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

CircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default CircleFill;
