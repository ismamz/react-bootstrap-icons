import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Watch = forwardRef(({
  color, size, title, className, ...rest
}, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      className={['bi', 'bi-watch', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {title ? <title>{title}</title> : null}

      <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z" />
      <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A6 6 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a6 6 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A6 6 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0" />
    </svg>
  );
});

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

Watch.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default Watch;
