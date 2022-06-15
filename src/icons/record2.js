import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Record2 = forwardRef(({
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

      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
      <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
    </svg>
  );
});

Record2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Record2.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Record2;
