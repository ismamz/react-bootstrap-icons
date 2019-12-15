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
      <path d="M9.991 13.674l1.538-7.219c.123-.595.246-.71 1.347-.807l.11-.52H9.211l-.11.52c1.06.096 1.128.212 1.005.807L8.57 13.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
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
