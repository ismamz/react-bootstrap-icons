import React from 'react';
import PropTypes from 'prop-types';

const Cone = (props) => {
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
      <path d="M9.03 3.88c.252-1.01 1.688-1.01 1.94 0L14 16H6L9.03 3.88z" />
      <path
        fillRule="evenodd"
        d="M3.5 16a.5.5 0 01.5-.5h12a.5.5 0 010 1H4a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Cone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cone.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Cone;
