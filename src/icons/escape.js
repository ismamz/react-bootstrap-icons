import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Escape = forwardRef(({
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

      <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02Z"/>
      <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732l5.096 5.096Z"/>
    </svg>
  );
});

Escape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Escape.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Escape;
