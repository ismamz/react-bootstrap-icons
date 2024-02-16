import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar3Fill = forwardRef(({
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

      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3z" />
    </svg>
  );
});

Calendar3Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Calendar3Fill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Calendar3Fill;
