import React from 'react';
import PropTypes from 'prop-types';

const FolderFill = (props) => {
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
        d="M11.828 5h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0115.174 16H4.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L2.5 5a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 0011.828 5zm-8.322.12C3.72 5.042 3.95 5 4.19 5h5.396l-.707-.707A1 1 0 008.172 4H4.5a1 1 0 00-1 .981l.006.139z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FolderFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FolderFill;
