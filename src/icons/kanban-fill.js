import React from 'react';
import PropTypes from 'prop-types';

const KanbanFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M2.5 0a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V2a2 2 0 00-2-2h-11zm5 2a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 001-1V3a1 1 0 00-1-1h-1zm-5 1a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V3zm9-1a1 1 0 00-1 1v10a1 1 0 001 1h1a1 1 0 001-1V3a1 1 0 00-1-1h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

KanbanFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KanbanFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default KanbanFill;
