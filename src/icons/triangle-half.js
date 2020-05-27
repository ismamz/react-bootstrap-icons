import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TriangleHalf = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M8.065 2.016a.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.162.162 0 0 1-.054.06.115.115 0 0 1-.066.017l-6.856-.017V2a.13.13 0 0 1 .063.016zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
      />
    </svg>
  );
});

TriangleHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TriangleHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TriangleHalf;
