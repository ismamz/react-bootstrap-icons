import React from 'react';
import PropTypes from 'prop-types';

const FileEarmarkCheck = (props) => {
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
      <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h5v-1H4a1 1 0 01-1-1V3a1 1 0 011-1h5v2.5A1.5 1.5 0 0010.5 6H13v2h1V6L9 1z" />
      <path
        fillRule="evenodd"
        d="M15.854 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l1.146 1.147 2.646-2.647a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FileEarmarkCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkCheck.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkCheck;
