import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cone = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0L12 14H4L7.03 1.88z" />
      <path
        fillRule="evenodd"
        d="M1.5 14a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

Cone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cone.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Cone;
