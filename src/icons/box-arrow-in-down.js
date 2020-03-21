import React from 'react';
import PropTypes from 'prop-types';

const BoxArrowInDown = (props) => {
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
        d="M4.646 8.146a.5.5 0 01.708 0L8 10.793l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 1a.5.5 0 01.5.5v9a.5.5 0 01-1 0v-9A.5.5 0 018 1z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1.5 13.5A1.5 1.5 0 003 15h10a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013 4h-1.5a.5.5 0 000 1H13a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-8A.5.5 0 013 5h1.5a.5.5 0 000-1H3a1.5 1.5 0 00-1.5 1.5v8z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoxArrowInDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowInDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowInDown;
