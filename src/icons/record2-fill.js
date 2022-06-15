import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Record2Fill = forwardRef(({
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
      <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
      <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
});

Record2Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Record2Fill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Record2Fill;
