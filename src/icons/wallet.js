import React from 'react';
import PropTypes from 'prop-types';

const Wallet = (props) => {
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
        d="M3.5 5a.5.5 0 00-.5.5v2h5a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h5v-2a.5.5 0 00-.5-.5h-13zM17 8.5h-4.551a2.678 2.678 0 01-.443 1.042c-.393.546-1.043.958-2.006.958-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 017.551 8.5H3v6a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-6zm-15-3A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5v-9z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Wallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wallet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Wallet;
