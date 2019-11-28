import React from 'react';
import PropTypes from 'prop-types';

const CircleSlash = (props) => {
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
        d="M1.5 10a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zM10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm4.72 12.927L4.608 5.315l.707-.707L15.427 14.72l-.707.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};

CircleSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleSlash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CircleSlash;
