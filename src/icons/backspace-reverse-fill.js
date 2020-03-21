import React from 'react';
import PropTypes from 'prop-types';

const BackspaceReverseFill = (props) => {
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
        d="M0 3a2 2 0 012-2h7.08a2 2 0 011.519.698l4.843 5.651a1 1 0 010 1.302L10.6 14.3a2 2 0 01-1.52.7H2a2 2 0 01-2-2V3zm9.854 2.854a.5.5 0 00-.708-.708L7 7.293 4.854 5.146a.5.5 0 10-.708.708L6.293 8l-2.147 2.146a.5.5 0 00.708.708L7 8.707l2.146 2.147a.5.5 0 00.708-.708L7.707 8l2.147-2.146z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BackspaceReverseFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BackspaceReverseFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BackspaceReverseFill;
