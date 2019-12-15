import React from 'react';
import PropTypes from 'prop-types';

const Map = (props) => {
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
        d="M17.817 2.613A.5.5 0 0118 3v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L7.5 16.51l-4.902.98A.5.5 0 012 17V4a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM12 4.41l-4-.8v11.98l4 .8V4.41zm1 11.98l4-.8V3.61l-4 .8v11.98zm-6-.8V3.61l-4 .8v11.98l4-.8z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Map.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Map.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Map;
