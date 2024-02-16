import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TriangleHalf = forwardRef(({
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

      <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.2.2 0 0 0 .054-.06.18.18 0 0 0-.002-.183L8.12 2.073a.15.15 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767z" />
    </svg>
  );
});

TriangleHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

TriangleHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default TriangleHalf;
