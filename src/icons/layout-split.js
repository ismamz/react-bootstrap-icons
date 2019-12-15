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
        d="M1.5 5A2.5 2.5 0 014 2.5h12A2.5 2.5 0 0118.5 5v10a2.5 2.5 0 01-2.5 2.5H4A2.5 2.5 0 011.5 15V5zM4 3.5A1.5 1.5 0 002.5 5v10A1.5 1.5 0 004 16.5h12a1.5 1.5 0 001.5-1.5V5A1.5 1.5 0 0016 3.5h-5.5v13h-1v-13H4z"
        clipRule="evenodd"
      />
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
