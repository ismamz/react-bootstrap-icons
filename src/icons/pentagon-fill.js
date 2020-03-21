import React from 'react';
import PropTypes from 'prop-types';

const PentagonFill = (props) => {
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
      <path d="M8 0l8 6.5-3 9.5H3L0 6.5 8 0z" />
    </svg>
  );
};

PentagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PentagonFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PentagonFill;
