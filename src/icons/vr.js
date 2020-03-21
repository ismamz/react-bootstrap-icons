import React from 'react';
import PropTypes from 'prop-types';

const Vr = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M3 12V4a1 1 0 011-1h2.5V2H4a2 2 0 00-2 2v8a2 2 0 002 2h2.5v-1H4a1 1 0 01-1-1zm6.5 1v1H12a2 2 0 002-2V4a2 2 0 00-2-2H9.5v1H12a1 1 0 011 1v8a1 1 0 01-1 1H9.5z" />
      <path
        fillRule="evenodd"
        d="M8 16a.5.5 0 01-.5-.5V.5a.5.5 0 011 0v15a.5.5 0 01-.5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Vr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Vr.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Vr;
