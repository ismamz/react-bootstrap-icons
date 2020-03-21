import React from 'react';
import PropTypes from 'prop-types';

const Kanban = (props) => {
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
        d="M13.5 1h-11a1 1 0 00-1 1v12a1 1 0 001 1h11a1 1 0 001-1V2a1 1 0 00-1-1zm-11-1a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V2a2 2 0 00-2-2h-11z"
        clipRule="evenodd"
      />
      <rect width="3" height="5" x="6.5" y="2" rx="1" />
      <rect width="3" height="9" x="2.5" y="2" rx="1" />
      <rect width="3" height="12" x="10.5" y="2" rx="1" />
    </svg>
  );
};

Kanban.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kanban.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Kanban;
