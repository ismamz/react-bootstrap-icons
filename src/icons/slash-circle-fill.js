import React from 'react';
import PropTypes from 'prop-types';

const SlashCircleFill = (props) => {
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
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.146-3.146a.5.5 0 00-.708-.708l-7 7a.5.5 0 00.708.708l7-7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SlashCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SlashCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SlashCircleFill;
