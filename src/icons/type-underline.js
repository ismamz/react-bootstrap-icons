import React from 'react';
import PropTypes from 'prop-types';

const TypeUnderline = (props) => {
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
      <path d="M7 14.5h7v-1H7v1zm1.1-10v5.211c0 1.332.873 2.297 2.4 2.297s2.4-.965 2.4-2.297V4.5H14v5.284c0 1.882-1.313 3.238-3.5 3.238-2.187 0-3.5-1.356-3.5-3.238V4.5h1.1z" />
    </svg>
  );
};

TypeUnderline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TypeUnderline.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TypeUnderline;
