import React from 'react';
import PropTypes from 'prop-types';

const SkipBackward = (props) => {
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
        d="M2.5 5.5A.5.5 0 013 6v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L10.5 10.752v2.94c0 .653-.713.998-1.233.696L3 10.752V14a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm7 1.133L3.696 10 9.5 13.367V6.633zm7.5 0L11.196 10 17 13.367V6.633z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SkipBackward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipBackward.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipBackward;
