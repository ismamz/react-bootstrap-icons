import React from 'react';
import PropTypes from 'prop-types';

const SkipStart = (props) => {
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
        d="M4.5 3.5A.5.5 0 004 4v8a.5.5 0 001 0V4a.5.5 0 00-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.696 8L11.5 4.633v6.734L5.696 8zm-.792-.696a.802.802 0 000 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L4.904 7.304z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SkipStart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipStart.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipStart;
