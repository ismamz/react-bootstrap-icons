import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Arrow90degUp = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2.646 6.854a.5.5 0 0 0 .708 0L6 4.207l2.646 2.647a.5.5 0 1 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"
      />
      <path
        fillRule="evenodd"
        d="M6 3.5a.5.5 0 0 0-.5.5v6.5A2.5 2.5 0 0 0 8 13h5.5a.5.5 0 0 0 0-1H8a1.5 1.5 0 0 1-1.5-1.5V4a.5.5 0 0 0-.5-.5z"
      />
    </svg>
  );
});

Arrow90degUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Arrow90degUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Arrow90degUp;
