import React from 'react';
import PropTypes from 'prop-types';

const Bucket = (props) => {
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
        d="M10 3.5A4.5 4.5 0 005.5 8h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 0010 3.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M3.61 7.687A.5.5 0 014 7.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H6.802a1.5 1.5 0 01-1.464-1.175L3.512 8.108a.5.5 0 01.098-.42zm1.013.813l1.691 7.608a.5.5 0 00.488.392h6.396a.5.5 0 00.488-.392l1.69-7.608H4.624z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Bucket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bucket.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Bucket;
