import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TabletLandscape = forwardRef(({
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

      <path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2z" />
      <path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
    </svg>
  );
});

TabletLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

TabletLandscape.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default TabletLandscape;
