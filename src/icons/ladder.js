import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ladder = forwardRef(({
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

      <path d="M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5M5 14h6v-2H5zm0-3h6V9H5zm0-3h6V6H5zm0-3h6V3H5z" />
    </svg>
  );
});

Ladder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Ladder.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Ladder;
