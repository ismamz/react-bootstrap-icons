import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Paragraph = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 1h4.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-1 0V2H9v12.5a.5.5 0 0 1-1 0V1z"
      />
      <path d="M9 1v8H7a4 4 0 1 1 0-8h2z" />
    </svg>
  );
});

Paragraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Paragraph.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Paragraph;
