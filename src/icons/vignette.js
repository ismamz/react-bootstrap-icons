import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vignette = forwardRef(({
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

      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
      <path d="M8.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.683-6.281a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5Zm-3.5 6.062a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5Zm4.598-4.598a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866Zm-6.062 3.5a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866ZM11.5 8.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-7 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm6.281 1.683a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866Zm-6.062-3.5a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866Zm4.598 4.598a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5Zm-3.5-6.062a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5Z" />
    </svg>
  );
});

Vignette.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Vignette.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Vignette;
