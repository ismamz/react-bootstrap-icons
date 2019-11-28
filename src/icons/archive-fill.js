import React from 'react';
import PropTypes from 'prop-types';

const ArchiveFill = (props) => {
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
        d="M14.643 17C15.979 17 17 15.845 17 14.5V7H3v7.5C3 15.845 4.021 17 5.357 17h9.286zM8 9a.5.5 0 000 1h4a.5.5 0 000-1H8zM3 3a1 1 0 00-1 1v1.5a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArchiveFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArchiveFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArchiveFill;
