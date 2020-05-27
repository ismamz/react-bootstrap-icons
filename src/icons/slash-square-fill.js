import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SlashSquareFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708l-7 7a.5.5 0 0 0 .708.708l7-7z"
      />
    </svg>
  );
});

SlashSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SlashSquareFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SlashSquareFill;
