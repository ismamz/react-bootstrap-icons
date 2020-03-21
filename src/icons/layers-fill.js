import React from 'react';
import PropTypes from 'prop-types';

const LayersFill = (props) => {
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
        d="M7.765 1.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2.125 8.567l-1.86.992a.5.5 0 000 .882l7.5 4a.5.5 0 00.47 0l7.5-4a.5.5 0 000-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 01-1.41 0l.418-.785-.419.785-5.169-2.756z"
        clipRule="evenodd"
      />
    </svg>
  );
};

LayersFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayersFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LayersFill;
