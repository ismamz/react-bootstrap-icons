import React from 'react';
import PropTypes from 'prop-types';

const VolumeMuteFill = (props) => {
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
        d="M6.717 3.55A.5.5 0 017 4v8a.5.5 0 01-.812.39L3.825 10.5H1.5A.5.5 0 011 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zm7.137 1.596a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.146 5.146a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeMuteFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeMuteFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default VolumeMuteFill;
