import React from 'react';
import PropTypes from 'prop-types';

const LightningFill = (props) => {
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
        d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z"
        clipRule="evenodd"
      />
    </svg>
  );
};

LightningFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LightningFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LightningFill;
