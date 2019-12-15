import React from 'react';
import PropTypes from 'prop-types';

const Brush = (props) => {
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
      <path d="M17.213 3.018a.572.572 0 01.755.05.57.57 0 01.058.746c-.941 1.268-3.982 5.293-6.426 7.736a12.89 12.89 0 01-1.952 1.596c-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.213-1.543.347-.542.888-1.273 1.643-1.977 2.521-2.35 6.476-5.44 7.734-6.411z" />
      <path d="M9 14a2 2 0 01-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 012 2z" />
    </svg>
  );
};

Brush.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Brush.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Brush;
