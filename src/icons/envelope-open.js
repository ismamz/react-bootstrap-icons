import React from 'react';
import PropTypes from 'prop-types';

const EnvelopeOpen = (props) => {
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
        d="M2.243 8.929l.514-.858L10 12.417l7.243-4.346.514.858L10 13.583 2.243 8.93z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.184 12.68l-6.432 3.752-.504-.864 6.432-3.752.504.864zm1.632 0l6.432 3.752.504-.864-6.432-3.752-.504.864z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10.47 3.318a1 1 0 00-.94 0l-6 3.2A1 1 0 003 7.4V16a1 1 0 001 1h12a1 1 0 001-1V7.4a1 1 0 00-.53-.882l-6-3.2zm-1.41-.883a2 2 0 011.882 0l6 3.2A2 2 0 0118 7.4V16a2 2 0 01-2 2H4a2 2 0 01-2-2V7.4a2 2 0 011.059-1.765l6-3.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

EnvelopeOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeOpen.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EnvelopeOpen;
