import React from 'react';
import PropTypes from 'prop-types';

const LayoutSplit = (props) => {
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
        d="M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z"
        clipRule="evenodd"
      />
      <path fillRule="evenodd" d="M7.5 14V2h1v12h-1z" clipRule="evenodd" />
    </svg>
  );
};

LayoutSplit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayoutSplit.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LayoutSplit;
