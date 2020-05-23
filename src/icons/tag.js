import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tag = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M.5 2A1.5 1.5 0 0 1 2 .5h4.586a1.5 1.5 0 0 1 1.06.44l7 7a1.5 1.5 0 0 1 0 2.12l-4.585 4.586a1.5 1.5 0 0 1-2.122 0l-7-7A1.5 1.5 0 0 1 .5 6.586V2zM2 1.5a.5.5 0 0 0-.5.5v4.586a.5.5 0 0 0 .146.353l7 7a.5.5 0 0 0 .708 0l4.585-4.585a.5.5 0 0 0 0-.708l-7-7a.5.5 0 0 0-.353-.146H2z"
      />
      <path
        fillRule="evenodd"
        d="M2.5 4.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      />
    </svg>
  );
});

Tag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tag.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Tag;
