import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tablet = forwardRef(({
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
      className={['bi', 'bi-tablet', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {title ? <title>{title}</title> : null}

      <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  );
});

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

Tablet.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default Tablet;
