import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UsbPlugFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM5.5 5a.5.5 0 0 0-.5.5v4.894a2 2 0 0 0 .336 1.11l.83 1.245c.544.816.834 1.774.834 2.754 0 .275.222.497.497.497h2.006a.497.497 0 0 0 .497-.497c0-.98.29-1.938.834-2.754l.83-1.245a2 2 0 0 0 .336-1.11V5.5a.5.5 0 0 0-.5-.5h-6Z" />
    </svg>
  );
});

UsbPlugFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UsbPlugFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default UsbPlugFill;
