import React from 'react';
import PropTypes from 'prop-types';

const TvFill = (props) => {
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
        d="M4.5 15.5A.5.5 0 015 15h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM4 4h12s2 0 2 2v6s0 2-2 2H4s-2 0-2-2V6s0-2 2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

TvFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TvFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TvFill;
