import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Virus2 = forwardRef(({
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

      <path d="M8 0a1 1 0 0 0-1 1v1.143c0 .557-.407 1.025-.921 1.24-.514.214-1.12.162-1.513-.231l-.809-.809a1 1 0 1 0-1.414 1.414l.809.809c.394.394.445.999.23 1.513C3.169 6.593 2.7 7 2.144 7H1a1 1 0 0 0 0 2h1.143c.557 0 1.025.407 1.24.921.214.514.163 1.12-.231 1.513l-.809.809a1 1 0 0 0 1.414 1.414l.809-.809c.394-.394.999-.445 1.513-.23.514.214.921.682.921 1.24V15a1 1 0 1 0 2 0v-1.143c0-.557.407-1.025.921-1.24.514-.214 1.12-.162 1.513.231l.809.809a1 1 0 0 0 1.414-1.414l-.809-.809c-.393-.394-.445-.999-.23-1.513.214-.514.682-.921 1.24-.921H15a1 1 0 1 0 0-2h-1.143c-.557 0-1.025-.407-1.24-.921-.214-.514-.162-1.12.231-1.513l.809-.809a1 1 0 0 0-1.414-1.414l-.809.809c-.394.393-.999.445-1.513.23-.514-.214-.92-.682-.92-1.24V1a1 1 0 0 0-1-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
});

Virus2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Virus2.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Virus2;
