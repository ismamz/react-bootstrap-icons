import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pentagon = forwardRef(({
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
      <path d="m8 1.288 6.842 5.56L12.267 15H3.733L1.158 6.847 8 1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z" />
    </svg>
  );
});

Pentagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Pentagon.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Pentagon;
