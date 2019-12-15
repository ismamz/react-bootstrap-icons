import React from 'react';
import PropTypes from 'prop-types';

const EyeSlash = (props) => {
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
      <path d="M15.359 13.238C17.06 11.72 18 10 18 10s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 0110 5.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0116.828 10c-.058.087-.122.183-.195.288a13.14 13.14 0 01-1.465 1.755c-.165.165-.337.328-.517.486l.708.709z" />
      <path d="M13.297 11.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z" />
      <path d="M5.35 7.47c-.18.16-.353.322-.518.487A13.134 13.134 0 003.172 10l.195.288c.335.48.83 1.12 1.465 1.755C6.121 13.332 7.881 14.5 10 14.5c.716 0 1.39-.133 2.02-.36l.77.772A7.027 7.027 0 0110 15.5c-5 0-8-5.5-8-5.5s.939-1.721 2.641-3.238l.708.709z" />
      <path
        fillRule="evenodd"
        d="M15.646 16.354l-12-12 .708-.708 12 12-.708.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};

EyeSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EyeSlash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EyeSlash;
