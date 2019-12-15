import React from 'react';
import PropTypes from 'prop-types';

const ShieldFill = (props) => {
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
        d="M7.187 3.025C8.23 2.749 9.337 2.5 10 2.5c.662 0 1.77.249 2.813.525 1.066.282 2.14.614 2.772.815.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.192 11.192 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.527-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.418-2.3c-1.611-2.058-2.94-5.168-2.367-9.365A1.454 1.454 0 014.415 3.84a61.113 61.113 0 012.772-.815z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShieldFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ShieldFill;
