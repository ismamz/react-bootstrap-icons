import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowBarRight = forwardRef(({
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

      <path
        fillRule="evenodd"
        d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
      />
    </svg>
  );
});

ArrowBarRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

ArrowBarRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default ArrowBarRight;
