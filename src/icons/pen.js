import React from 'react';
import PropTypes from 'prop-types';

const Pen = (props) => {
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
        d="M7.707 15.707a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391L12.086 4.5a2 2 0 012.828 0l.586.586a2 2 0 010 2.828l-7.793 7.793zM5 13l7.793-7.793a1 1 0 011.414 0l.586.586a1 1 0 010 1.414L7 15l-3 1 1-3z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.854 4.56a.5.5 0 00-.708 0L7.854 7.855a.5.5 0 11-.708-.708l3.293-3.292a1.5 1.5 0 012.122 0l.293.292a.5.5 0 11-.708.708l-.292-.293z"
        clipRule="evenodd"
      />
      <path d="M15.293 3.207a1 1 0 011.414 0l.03.03a1 1 0 01.03 1.383L15.5 6 14 4.5l1.293-1.293z" />
    </svg>
  );
};

Pen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pen.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Pen;
