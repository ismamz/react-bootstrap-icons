import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cloud = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4.887 7.2l-.964-.165A2.5 2.5 0 1 0 3.5 12h10a1.5 1.5 0 0 0 .237-2.981L12.7 8.854l.216-1.028a4 4 0 1 0-7.843-1.587l-.185.96zm9.084.341a5 5 0 0 0-9.88-1.492A3.5 3.5 0 1 0 3.5 13h9.999a2.5 2.5 0 0 0 .394-4.968c.033-.16.06-.324.077-.49z"
      />
    </svg>
  );
});

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cloud.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Cloud;
