import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TypeUnderline = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z" />
      <path fillRule="evenodd" d="M12.5 15h-9v-1h9v1z" />
    </svg>
  );
});

TypeUnderline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TypeUnderline.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TypeUnderline;
