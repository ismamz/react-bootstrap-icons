import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CreditCard2BackFill = forwardRef(
  ({
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

        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z" />
      </svg>
    );
  },
);

CreditCard2BackFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

CreditCard2BackFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default CreditCard2BackFill;
