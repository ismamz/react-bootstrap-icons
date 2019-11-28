import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = (props) => {
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
        d="M16 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
      <rect width="3" height="3" x="4" y="11" rx="1" />
      <path d="M3 7h14v2H3z" />
    </svg>
  );
};

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CreditCard.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CreditCard;
