import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowsExpand = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8zm6-1.5a.5.5 0 0 0 .5-.5V1.5a.5.5 0 0 0-1 0V6a.5.5 0 0 0 .5.5z"
      />
      <path
        fillRule="evenodd"
        d="M10.354 3.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L8 2.207l1.646 1.647a.5.5 0 0 0 .708 0zM8 9.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M10.354 12.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8 13.793l1.646-1.647a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
});

ArrowsExpand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsExpand.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowsExpand;
