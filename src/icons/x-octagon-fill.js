import React from 'react';
import PropTypes from 'prop-types';

const XOctagonFill = (props) => {
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
        d="M13.46 2.146A.5.5 0 0013.107 2H6.893a.5.5 0 00-.353.146L2.146 6.54A.5.5 0 002 6.893v6.214a.5.5 0 00.146.353l4.394 4.394a.5.5 0 00.353.146h6.214a.5.5 0 00.353-.146l4.394-4.394a.5.5 0 00.146-.353V6.893a.5.5 0 00-.146-.353L13.46 2.146zm-6.106 4.5L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

XOctagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XOctagonFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default XOctagonFill;
