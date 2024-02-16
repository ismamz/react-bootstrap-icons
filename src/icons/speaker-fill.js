import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SpeakerFill = forwardRef(({
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

      <path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" />
      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </svg>
  );
});

SpeakerFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

SpeakerFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default SpeakerFill;
