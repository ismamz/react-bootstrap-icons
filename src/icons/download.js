import React from 'react';
import PropTypes from 'prop-types';

const Download = (props) => {
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
        d="M2.5 10a.5.5 0 01.5.5V14a1 1 0 001 1h12a1 1 0 001-1v-3.5a.5.5 0 011 0V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-3.5a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7 9.5a.5.5 0 01.707 0L10 11.793 12.293 9.5a.5.5 0 01.707.707l-2.646 2.647a.5.5 0 01-.708 0L7 10.207A.5.5 0 017 9.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 3a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 0110 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Download.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Download;
