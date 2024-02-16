import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UsbPlug = forwardRef(({
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

      <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM6 5a1 1 0 0 0-1 1v4.394c0 .494.146.976.42 1.387l1.038 1.558c.354.53.542 1.152.542 1.789 0 .481.39.872.872.872h1.256c.481 0 .872-.39.872-.872 0-.637.188-1.26.541-1.789l1.04-1.558A2.5 2.5 0 0 0 12 10.394V6a1 1 0 0 0-1-1zm0 1h5v4.394a1.5 1.5 0 0 1-.252.832L9.71 12.784A4.2 4.2 0 0 0 9.002 15H7.998a4.2 4.2 0 0 0-.707-2.216l-1.04-1.558A1.5 1.5 0 0 1 6 10.394z" />
    </svg>
  );
});

UsbPlug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

UsbPlug.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default UsbPlug;
