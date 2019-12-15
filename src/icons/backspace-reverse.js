import React from 'react';
import PropTypes from 'prop-types';

const BackspaceReverse = (props) => {
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
        d="M11.08 4H4a1 1 0 00-1 1v10a1 1 0 001 1h7.08a1 1 0 00.76-.35L16.682 10l-4.844-5.65A1 1 0 0011.08 4zM4 3a2 2 0 00-2 2v10a2 2 0 002 2h7.08a2 2 0 001.519-.698l4.843-5.651a1 1 0 000-1.302L12.6 3.7a2 2 0 00-1.52-.7H4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.854 7.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708-.708l5-5a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.146 7.146a.5.5 0 000 .708l5 5a.5.5 0 00.708-.708l-5-5a.5.5 0 00-.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BackspaceReverse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BackspaceReverse.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BackspaceReverse;
