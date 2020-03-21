import React from 'react';
import PropTypes from 'prop-types';

const Subtract = (props) => {
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
      <path d="M4 12v2.5A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4H12v6.5a1.5 1.5 0 01-1.5 1.5H4z" />
      <path
        fillRule="evenodd"
        d="M10.5 1h-9a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-9-1A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0h-9z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Subtract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Subtract.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Subtract;
