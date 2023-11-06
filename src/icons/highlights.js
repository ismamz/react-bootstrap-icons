import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Highlights = forwardRef(({
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

      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0Zm-8 5v1H4.5a.502.502 0 0 0-.093.009A7.029 7.029 0 0 1 3.1 13H8Zm0-1H2.255a6.998 6.998 0 0 1-.581-1H8v1Zm-6.71-2a6.96 6.96 0 0 1-.22-1H8v1H1.29ZM1 8c0-.34.024-.673.07-1H8v1H1Zm.29-2c.103-.345.231-.68.384-1H8v1H1.29Zm.965-2c.25-.36.534-.694.846-1H8v1H2.255Zm2.137-2A6.967 6.967 0 0 1 8 1v1H4.392Z" />
    </svg>
  );
});

Highlights.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Highlights.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Highlights;
