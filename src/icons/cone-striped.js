import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ConeStriped = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M7.879 11.015a.5.5 0 0 1 .242 0l6 1.5a.5.5 0 0 1 .037.96l-6 2a.499.499 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l6-1.5z"
      />
      <path d="M11.885 12.538l-.72-2.877C10.303 9.873 9.201 10 8 10s-2.303-.127-3.165-.339l-.72 2.877c-.073.292-.002.6.256.756C4.86 13.589 5.916 14 8 14s3.14-.411 3.63-.706c.257-.155.328-.464.255-.756zM9.97 4.88l.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.159-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098z" />
    </svg>
  );
});

ConeStriped.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ConeStriped.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ConeStriped;
