import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
        clipRule="evenodd"
      />
      <path fillRule="evenodd" d="M15 4H1V3h14v1z" clipRule="evenodd" />
      <path
        fillRule="evenodd"
        d="M5 15.5v-14h1v14H5zm5 0v-14h1v14h-1z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M15 8H1V7h14v1zm0 4H1v-1h14v1z"
        clipRule="evenodd"
      />
      <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v2H0V2z" />
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
