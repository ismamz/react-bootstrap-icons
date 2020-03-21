import React from 'react';
import PropTypes from 'prop-types';

const ExclamationTriangleFill = (props) => {
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
        d="M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 5zm.002 6a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ExclamationTriangleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ExclamationTriangleFill;
