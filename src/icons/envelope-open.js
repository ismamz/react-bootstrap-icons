import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EnvelopeOpen = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 8.917l7.757 4.654-.514.858L8 10.083.757 14.43l-.514-.858L8 8.917z"
      />
      <path
        fillRule="evenodd"
        d="M6.447 10.651L.243 6.93l.514-.858 6.204 3.723-.514.857zm9.31-3.722L9.553 10.65l-.514-.857 6.204-3.723.514.858z"
      />
      <path
        fillRule="evenodd"
        d="M15 14V5.236a1 1 0 0 0-.553-.894l-6-3a1 1 0 0 0-.894 0l-6 3A1 1 0 0 0 1 5.236V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM1.106 3.447A2 2 0 0 0 0 5.237V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.236a2 2 0 0 0-1.106-1.789l-6-3a2 2 0 0 0-1.788 0l-6 3z"
      />
    </svg>
  );
});

EnvelopeOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeOpen.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EnvelopeOpen;
