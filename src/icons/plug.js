import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Plug = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M4 5h8v3a4 4 0 0 1-8 0V5z" />
      <path
        fillRule="evenodd"
        d="M6 1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zM7.115 13.651c.256-.511.385-1.408.385-2.651h1c0 1.257-.121 2.36-.49 3.099-.191.381-.47.707-.87.877-.401.17-.845.15-1.298-.002-.961-.32-1.534-.175-1.851.046-.33.23-.491.615-.491.98h-1c0-.635.278-1.353.918-1.8.653-.456 1.58-.561 2.74-.174.297.099.478.078.592.03.115-.05.244-.161.365-.405z"
      />
    </svg>
  );
});

Plug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Plug.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Plug;
