import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Signpost2Fill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M7 1.414V16h2V1.414a1 1 0 0 0-2 0z" />
      <path d="M1 3a1 1 0 0 1 1-1h11.5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.3 5.6a1 1 0 0 1-.8.4H2a1 1 0 0 1-1-1V3zm14 5a1 1 0 0 0-1-1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H14a1 1 0 0 0 1-1V8z" />
    </svg>
  );
});

Signpost2Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Signpost2Fill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Signpost2Fill;
