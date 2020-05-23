import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wifi = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M6.858 11.858A1.991 1.991 0 0 1 8 11.5c.425 0 .818.132 1.142.358L8 13l-1.142-1.142z"
      />
      <path
        fillRule="evenodd"
        d="M7.731 12.024l.269.269.269-.269a1.507 1.507 0 0 0-.538 0zm-1.159-.576A2.49 2.49 0 0 1 8 11c.53 0 1.023.165 1.428.448a.5.5 0 0 1 .068.763l-1.142 1.143a.5.5 0 0 1-.708 0L6.504 12.21a.5.5 0 0 1 .354-.853v.5l-.286-.41zM8 9.5a4.478 4.478 0 0 0-2.7.9.5.5 0 0 1-.6-.8c.919-.69 2.062-1.1 3.3-1.1s2.381.41 3.3 1.1a.5.5 0 0 1-.6.8A4.478 4.478 0 0 0 8 9.5zm0-3c-1.833 0-3.51.657-4.814 1.748a.5.5 0 0 1-.642-.766A8.468 8.468 0 0 1 8 5.5c2.076 0 3.98.745 5.456 1.982a.5.5 0 1 1-.642.766A7.468 7.468 0 0 0 8 6.5z"
      />
      <path
        fillRule="evenodd"
        d="M8 3.5c-2.657 0-5.082.986-6.932 2.613a.5.5 0 1 1-.66-.75A11.458 11.458 0 0 1 8 2.5c2.91 0 5.567 1.081 7.592 2.862a.5.5 0 1 1-.66.751A10.458 10.458 0 0 0 8 3.5z"
      />
    </svg>
  );
});

Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wifi.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Wifi;
