import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PlusLg = forwardRef(({
  color, size, title, className, ...rest
}, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      className={['bi', 'bi-plus-lg', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {title ? <title>{title}</title> : null}

      <path
        fillRule="evenodd"
        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
      />
    </svg>
  );
});

PlusLg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

PlusLg.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default PlusLg;
