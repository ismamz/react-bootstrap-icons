import React from 'react';
import PropTypes from 'prop-types';

const Diamond = (props) => {
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
        d="M5.1 2.7a.5.5 0 01.4-.2h9a.5.5 0 01.4.2l2.976 3.974c.149.185.156.45.01.644L10.4 17.3a.5.5 0 01-.8 0l-7.5-10a.5.5 0 010-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H6.186l.963 2.995 5.704-.006zM7.47 7.495l5.062-.005L10 15.366 7.47 7.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM3.499 7.5l2.92-.003 2.193 6.82L3.5 7.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Diamond.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Diamond.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Diamond;
