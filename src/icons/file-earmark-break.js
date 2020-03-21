import React from 'react';
import PropTypes from 'prop-types';

const FileEarmarkBreak = (props) => {
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
        d="M9 1H4a2 2 0 00-2 2v6h1V3a1 1 0 011-1h5v2.5A1.5 1.5 0 0010.5 6H13v3h1V6L9 1zm5 11h-1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1H2v1a2 2 0 002 2h8a2 2 0 002-2v-1zM0 10.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FileEarmarkBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkBreak.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkBreak;
