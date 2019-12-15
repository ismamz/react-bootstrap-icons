import React from 'react';
import PropTypes from 'prop-types';

const EyeFill = (props) => {
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
      <path d="M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      <path
        fillRule="evenodd"
        d="M2 10s3-5.5 8-5.5 8 5.5 8 5.5-3 5.5-8 5.5S2 10 2 10zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

EyeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EyeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EyeFill;
