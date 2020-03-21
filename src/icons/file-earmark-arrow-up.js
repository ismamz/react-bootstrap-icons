import React from 'react';
import PropTypes from 'prop-types';

const FileEarmarkArrowUp = (props) => {
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
      <path d="M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z" />
      <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z" />
      <path
        fillRule="evenodd"
        d="M5.646 8.854a.5.5 0 00.708 0L8 7.207l1.646 1.647a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 12a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v4a.5.5 0 00.5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FileEarmarkArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkArrowUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkArrowUp;
