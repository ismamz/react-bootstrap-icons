import React from 'react';
import PropTypes from 'prop-types';

const Clock = (props) => {
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
        d="M10 17a7 7 0 100-14 7 7 0 000 14zm8-7a8 8 0 11-16 0 8 8 0 0116 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 4a.5.5 0 01.5.5V10a.5.5 0 01-.5.5H5.5a.5.5 0 010-1h4v-5A.5.5 0 0110 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Clock.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Clock;
