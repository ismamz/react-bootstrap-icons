import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MinecartLoaded = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"
      />
      <path
        fillRule="evenodd"
        d="M6 1.5a2.498 2.498 0 0 1 4 0c.818 0 1.545.394 2 1 .67 0 1.28.265 1.729.694l-.692.722A1.493 1.493 0 0 0 12 3.5c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 0 0-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638a2.65 2.65 0 0 1-.634.634 1.511 1.511 0 0 0-.263.236l-.75-.662a2.5 2.5 0 0 1 .437-.391 1.63 1.63 0 0 0 .393-.393A2.498 2.498 0 0 1 6 1.5z"
      />
    </svg>
  );
});

MinecartLoaded.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MinecartLoaded.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MinecartLoaded;
