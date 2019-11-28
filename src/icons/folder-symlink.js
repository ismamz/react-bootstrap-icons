import React from 'react';
import PropTypes from 'prop-types';

const FolderSymlink = (props) => {
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
      <path d="M11.828 6a3 3 0 01-2.12-.879l-.83-.828A1 1 0 008.173 4H4.5a1 1 0 00-1 .981L3.546 6h-1L2.5 5a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 0011.828 5v1z" />
      <path
        fillRule="evenodd"
        d="M15.81 6H4.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0015.81 6zM4.19 5a2 2 0 00-1.992 2.181l.637 7A2 2 0 004.826 16h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0015.81 5H4.19z"
        clipRule="evenodd"
      />
      <path d="M10.616 12.24l3.182-1.969a.442.442 0 000-.742l-3.182-1.97c-.27-.166-.616.036-.616.372V8.7c-.857 0-3.429 0-4 4.8 1.429-2.7 4-2.4 4-2.4v.769c0 .336.346.538.616.371z" />
    </svg>
  );
};

FolderSymlink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderSymlink.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FolderSymlink;
