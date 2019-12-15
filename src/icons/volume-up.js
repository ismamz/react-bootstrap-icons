import React from 'react';
import PropTypes from 'prop-types';

const VolumeUp = (props) => {
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
        d="M8.717 5.55A.5.5 0 019 6v8a.5.5 0 01-.812.39L5.825 12.5H3.5A.5.5 0 013 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM8 7.04L6.312 8.39A.5.5 0 016 8.5H4v3h2a.5.5 0 01.312.11L8 12.96V7.04z"
        clipRule="evenodd"
      />
      <path d="M13.536 16.01a8.473 8.473 0 002.49-6.01 8.473 8.473 0 00-2.49-6.01l-.708.707A7.476 7.476 0 0115.025 10c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
      <path d="M12.121 14.596A6.48 6.48 0 0014.025 10a6.48 6.48 0 00-1.904-4.596l-.707.707A5.483 5.483 0 0113.025 10a5.483 5.483 0 01-1.61 3.89l.706.706z" />
      <path d="M10.707 13.182A4.486 4.486 0 0012.025 10a4.486 4.486 0 00-1.318-3.182L10 7.525A3.489 3.489 0 0111.025 10c0 .966-.392 1.841-1.025 2.475l.707.707z" />
    </svg>
  );
};

VolumeUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default VolumeUp;
