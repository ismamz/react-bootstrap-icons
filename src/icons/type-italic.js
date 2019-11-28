import React from 'react';
import PropTypes from 'prop-types';

const TypeItalic = (props) => {
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
      <path d="M9.85 12.863c-.106.51-.047.61.86.692l-.093.445H7.383l.094-.445c.943-.082 1.048-.182 1.154-.692l1.318-6.187c.106-.51.047-.61-.861-.692l.094-.445h3.234l-.094.445c-.943.082-1.049.182-1.154.692L9.85 12.863z" />
    </svg>
  );
};

TypeItalic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TypeItalic.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TypeItalic;
