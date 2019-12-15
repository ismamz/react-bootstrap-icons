import React from 'react';
import PropTypes from 'prop-types';

const AlarmFill = (props) => {
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
        d="M7.5 2.5A.5.5 0 018 2h4a.5.5 0 010 1h-1v1.07a7.002 7.002 0 013.537 12.26l.817.816a.5.5 0 01-.708.708l-.924-.925A6.967 6.967 0 0110 18a6.967 6.967 0 01-3.722-1.07l-.924.924a.5.5 0 01-.708-.708l.817-.816A7.002 7.002 0 019 4.07V3H8a.5.5 0 01-.5-.5zM2.86 7.387A2.5 2.5 0 116.387 3.86 8.035 8.035 0 002.86 7.387zM15.5 3c-.753 0-1.429.333-1.887.86a8.035 8.035 0 013.527 3.527A2.5 2.5 0 0015.5 3zm-5 4a.5.5 0 00-1 0v3.882l-1.447 2.894a.5.5 0 10.894.448l1.5-3A.5.5 0 0010.5 11V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

AlarmFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlarmFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default AlarmFill;
