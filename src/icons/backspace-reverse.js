import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BackspaceReverse = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M9.08 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7.08a1 1 0 0 0 .76-.35L14.682 8 9.839 2.35A1 1 0 0 0 9.08 2zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2z"
      />
      <path
        fillRule="evenodd"
        d="M9.854 5.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0z"
      />
      <path
        fillRule="evenodd"
        d="M4.146 5.146a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708l-5-5a.5.5 0 0 0-.708 0z"
      />
    </svg>
  );
});

BackspaceReverse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BackspaceReverse.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BackspaceReverse;
