import React from 'react';
import PropTypes from 'prop-types';

const CloudFill = (props) => {
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
        d="M5.5 15a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.5 2.5 0 0115.5 15h-10z"
        clipRule="evenodd"
      />
    </svg>
  );
};

CloudFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CloudFill;
