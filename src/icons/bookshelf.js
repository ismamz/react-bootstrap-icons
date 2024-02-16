import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bookshelf = forwardRef(({
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

      <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5M3 14h10v-3H3zm0-4h10V7H3zm0-4h10V3H3z" />
    </svg>
  );
});

Bookshelf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Bookshelf.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Bookshelf;
