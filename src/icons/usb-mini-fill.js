import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UsbMiniFill = forwardRef(({
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

      <path d="M3 3a1 1 0 0 0-1 1v1.293L.293 7A1 1 0 0 0 0 7.707V12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.707A1 1 0 0 0 15.707 7L14 5.293V4a1 1 0 0 0-1-1zm.5 5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
    </svg>
  );
});

UsbMiniFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

UsbMiniFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default UsbMiniFill;
