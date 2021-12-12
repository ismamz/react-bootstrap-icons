import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WebcamFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M6.644 11.094a.5.5 0 0 1 .356-.15h2a.5.5 0 0 1 .356.15c.175.177.39.347.603.496a7.166 7.166 0 0 0 .752.456l.01.006h.003A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.002-.001.01-.006a3.517 3.517 0 0 0 .214-.116 7.5 7.5 0 0 0 .539-.34c.214-.15.428-.319.603-.496ZM7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
      <path d="M2 3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2Zm6 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z" />
    </svg>
  );
});

WebcamFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WebcamFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default WebcamFill;
