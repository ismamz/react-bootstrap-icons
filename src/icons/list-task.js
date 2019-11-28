import React from 'react';
import PropTypes from 'prop-types';

const ListTask = (props) => {
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
        d="M4 4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H4zM5 5H4v1h1V5z"
        clipRule="evenodd"
      />
      <path d="M7 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM7.5 9a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 4a.5.5 0 000 1h9a.5.5 0 000-1h-9z" />
      <path
        fillRule="evenodd"
        d="M3.5 9a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V9zM4 9h1v1H4V9zm0 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H4zm1 .5H4v1h1v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ListTask.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ListTask.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ListTask;
