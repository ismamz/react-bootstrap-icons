import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ProjectorFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M2 4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2Zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-12 1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z" />
    </svg>
  );
});

ProjectorFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProjectorFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ProjectorFill;
