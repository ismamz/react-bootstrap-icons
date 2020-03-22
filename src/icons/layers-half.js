import React from 'react';
import PropTypes from 'prop-types';

const LayersHalf = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M3.188 8L.264 9.559a.5.5 0 000 .882l7.5 4a.5.5 0 00.47 0l7.5-4a.5.5 0 000-.882L12.813 8l-4.578 2.441a.5.5 0 01-.47 0L3.188 8z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.765 1.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

LayersHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayersHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LayersHalf;
