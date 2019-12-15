import React from 'react';
import PropTypes from 'prop-types';

const Images = (props) => {
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
        d="M14.002 6h-10a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1zm-10-1a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-10z"
        clipRule="evenodd"
      />
      <path d="M12.648 10.646a.5.5 0 01.577-.093l1.777 1.947V16h-12v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z" />
      <path
        fillRule="evenodd"
        d="M6.502 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 4h10a1 1 0 011 1v8a1 1 0 01-1 1v1a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2h1a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Images.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Images.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Images;
