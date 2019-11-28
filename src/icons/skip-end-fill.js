import React from 'react';
import PropTypes from 'prop-types';

const SkipEndFill = (props) => {
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
      <path stroke="#000" strokeLinecap="round" d="M2.5 6v8" />
      <path d="M2.904 10.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V6.308c0-.63-.693-1.01-1.233-.696L2.904 9.304a.802.802 0 000 1.393z" />
      <path d="M10.404 10.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V6.308c0-.63-.692-1.01-1.233-.696l-6.363 3.692a.802.802 0 000 1.393z" />
    </svg>
  );
};

SkipEndFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipEndFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipEndFill;
