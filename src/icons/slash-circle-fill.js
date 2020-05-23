import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SlashCircleFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708l-7 7a.5.5 0 0 0 .708.708l7-7z"
      />
    </svg>
  );
});

SlashCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SlashCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SlashCircleFill;
