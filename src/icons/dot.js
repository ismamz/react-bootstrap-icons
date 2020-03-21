import React from 'react';
import PropTypes from 'prop-types';

const Dot = (props) => {
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
      <path
        fillRule="evenodd"
        d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dot.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Dot;
