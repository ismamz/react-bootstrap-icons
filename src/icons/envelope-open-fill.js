import React from 'react';
import PropTypes from 'prop-types';

const EnvelopeOpenFill = (props) => {
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
      <path
        fillRule="evenodd"
        d="M8.941.435a2 2 0 00-1.882 0l-6 3.2A2 2 0 000 5.4v.125l8 4.889 8-4.889V5.4a2 2 0 00-1.059-1.765l-6-3.2zM16 6.697l-5.875 3.59L16 13.743V6.697zm-.168 8.108L9.246 10.93l-.089-.052-.896.548-.261.159-.26-.16-.897-.547-.09.052-6.585 3.874A2 2 0 002 16h12a2 2 0 001.832-1.195zM0 13.743l5.875-3.456L0 6.697v7.046z"
        clipRule="evenodd"
      />
    </svg>
  );
};

EnvelopeOpenFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeOpenFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EnvelopeOpenFill;
