import React from 'react';
import PropTypes from 'prop-types';

const ArrowsExpand = (props) => {
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
        d="M4 10a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 014 10zm6-1.5a.5.5 0 00.5-.5V3.5a.5.5 0 00-1 0V8a.5.5 0 00.5.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.354 5.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L10 4.207l1.646 1.647a.5.5 0 00.708 0zM10 11.5a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.354 14.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L10 15.793l1.646-1.647a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowsExpand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsExpand.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowsExpand;
