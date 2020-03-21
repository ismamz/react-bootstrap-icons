import React from 'react';
import PropTypes from 'prop-types';

const Pause = (props) => {
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
        d="M6 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pause.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Pause;
