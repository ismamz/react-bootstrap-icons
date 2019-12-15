import React from 'react';
import PropTypes from 'prop-types';

const TypeH1 = (props) => {
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
      <path d="M10.637 15V5.669H9.379V9.62H4.758V5.67H3.5V15h1.258v-4.273h4.62V15h1.259zm5.329 0V5.669h-1.244L12.5 7.316v1.265l2.16-1.565h.062V15h1.244z" />
    </svg>
  );
};

TypeH1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TypeH1.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TypeH1;
