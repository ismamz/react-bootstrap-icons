import React from 'react';
import PropTypes from 'prop-types';

const EggFill = (props) => {
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
      <path d="M14 10a6 6 0 01-12 0C2 5.686 5 0 8 0s6 5.686 6 10z" />
    </svg>
  );
};

EggFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EggFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EggFill;
