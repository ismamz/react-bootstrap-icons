import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BagDashFill = forwardRef(({
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
        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
      />
    </svg>
  );
});

BagDashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

BagDashFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default BagDashFill;
