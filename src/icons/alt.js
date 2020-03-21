import React from 'react';
import PropTypes from 'prop-types';

const Alt = (props) => {
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
        d="M1 13.5a.5.5 0 00.5.5h3.797a.5.5 0 00.439-.26L11 3h3.5a.5.5 0 000-1h-3.797a.5.5 0 00-.439.26L5 13H1.5a.5.5 0 00-.5.5zm10 0a.5.5 0 00.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Alt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Alt.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Alt;
