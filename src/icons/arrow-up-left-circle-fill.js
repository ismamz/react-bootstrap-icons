import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeftCircleFill = forwardRef(
  ({
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

        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707z" />
      </svg>
    );
  },
);

ArrowUpLeftCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

ArrowUpLeftCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default ArrowUpLeftCircleFill;
