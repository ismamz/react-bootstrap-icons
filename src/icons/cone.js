import React from 'react';
import PropTypes from 'prop-types';

const Cone = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0L12 14H4L7.03 1.88z" />
      <path
        fillRule="evenodd"
        d="M1.5 14a.5.5 0 01.5-.5h12a.5.5 0 010 1H2a.5.5 0 01-.5-.5z"
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
