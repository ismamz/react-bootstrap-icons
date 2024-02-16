import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SignDeadEndFill = forwardRef(({
  color, size, title, ...rest
}, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      {title ? <title>{title}</title> : null}

      <path d="M5.116 6.28h.32c.395 0 .582.24.582.722 0 .48-.186.718-.581.718h-.321zm3.636.066.268.845h-.552l.27-.845zm1.327-.066h.32c.394 0 .582.24.582.722 0 .48-.186.718-.582.718h-.32zm-.792 3h.32c.395 0 .582.24.582.722 0 .48-.186.718-.581.718h-.32z" />
      <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM4.782 6h.69c.596 0 .886.355.886.998S6.066 8 5.473 8h-.69zM7.82 7.72V8H6.571V6H7.82v.28h-.917v.57h.863v.268h-.863v.602zm.397.28h-.34l.688-2h.371l.689 2h-.352l-.177-.554h-.702L8.216 8Zm1.53-2h.69c.596 0 .886.355.886.998S11.03 8 10.436 8h-.69zm-2.923 4.72V11H5.575V9h1.248v.28h-.917v.57h.863v.268h-.863v.602zm.572.28h-.32V9h.294l.933 1.436h.014V9h.32v2h-.292l-.936-1.44h-.013zm1.56-2h.69c.596 0 .886.355.886.998S10.238 11 9.645 11h-.69z" />
    </svg>
  );
});

SignDeadEndFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

SignDeadEndFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default SignDeadEndFill;
