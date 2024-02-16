import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Subscript = forwardRef(({
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

      <path d="m3.266 12.496.96-2.853H7.76l.96 2.853H10L6.62 3H5.38L2 12.496zm2.748-8.063 1.419 4.23h-2.88l1.426-4.23zm6.132 7.203v-.075c0-.332.234-.618.619-.618.354 0 .618.256.618.58 0 .362-.271.649-.52.898l-1.788 1.832V15h3.59v-.958h-1.923v-.045l.973-1.04c.415-.438.867-.845.867-1.547 0-.8-.701-1.41-1.787-1.41-1.23 0-1.795.8-1.795 1.576v.06z" />
    </svg>
  );
});

Subscript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Subscript.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Subscript;
