import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GenderNeuter = forwardRef(({
  color, size, title, ...rest
}, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      {title ? <title>{title}</title> : null}

      <path
        fillRule="evenodd"
        d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V15.5a.5.5 0 0 1-1 0V9.975A5 5 0 0 1 3 5"
      />
    </svg>
  );
});

GenderNeuter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

GenderNeuter.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default GenderNeuter;
