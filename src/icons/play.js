import React from 'react';
import PropTypes from 'prop-types';

const Play = (props) => {
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
        d="M12.804 10L7 6.633v6.734L12.804 10zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C6.713 14.69 6 14.345 6 13.692V6.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Play.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Play;
