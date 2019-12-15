import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
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
        d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
      <path fillRule="evenodd" d="M17 6H3V5h14v1z" clipRule="evenodd" />
      <path
        fillRule="evenodd"
        d="M7 17.5v-14h1v14H7zm5 0v-14h1v14h-1z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M17 10H3V9h14v1zm0 4H3v-1h14v1z"
        clipRule="evenodd"
      />
      <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v2H2V4z" />
    </svg>
  );
};

Table.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Table.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Table;
