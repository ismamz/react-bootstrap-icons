import React from 'react';
import PropTypes from 'prop-types';

const CircleSlash = (props) => {
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
        d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM5.071 4.347a7.5 7.5 0 0110.582 10.582L5.071 4.347zm-.724.724a7.5 7.5 0 0010.582 10.582L4.347 5.071z"
        clipRule="evenodd"
      />
    </svg>
  );
};

CircleSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleSlash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CircleSlash;
