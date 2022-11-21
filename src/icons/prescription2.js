import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Prescription2 = forwardRef(({
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

      <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2V6Z" />
      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1V1Zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4H4ZM3 3h10V1H3v2Z" />
    </svg>
  );
});

Prescription2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Prescription2.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Prescription2;
