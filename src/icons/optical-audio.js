import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const OpticalAudio = forwardRef(({
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

      <path d="M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      <path d="M4.5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M8 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
      <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3.05a2.5 2.5 0 0 0 0-4.9V4.5a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 11.5 2h-7a.5.5 0 0 0-.354.146l-2 2A.5.5 0 0 0 2 4.5v2.05a2.5 2.5 0 0 0 0 4.9zm1-.5v-3a.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 0-3A.5.5 0 0 0 3 7V4.707L4.707 3h6.586L13 4.707V7a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5v3z" />
    </svg>
  );
});

OpticalAudio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

OpticalAudio.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default OpticalAudio;
