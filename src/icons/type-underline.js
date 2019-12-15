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
      <path d="M7.313 5.136h-1.23v6.405c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V5.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V5.136z" />
      <path fillRule="evenodd" d="M14.5 17h-9v-1h9v1z" clipRule="evenodd" />
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
