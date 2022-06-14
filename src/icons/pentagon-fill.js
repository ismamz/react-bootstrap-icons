import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PentagonFill = forwardRef(({
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
      <path d="m8 0 8 6.5-3 9.5H3L0 6.5 8 0z" />
    </svg>
  );
});

PentagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

PentagonFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PentagonFill;
