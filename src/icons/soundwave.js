import React from 'react';
import PropTypes from 'prop-types';

const Soundwave = (props) => {
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
        stroke="#000"
        strokeLinecap="round"
        d="M2.5 7v2m12-2v2m-2-3v4m-8-4v4m4-7.5v11m-2-9v7m4-7v7"
      />
    </svg>
  );
};

Soundwave.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Soundwave.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Soundwave;
