import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Option = forwardRef(({
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

      <path d="M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5m10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
    </svg>
  );
});

Option.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Option.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Option;
