import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
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
        d="M11 2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V5a3 3 0 00-3-3zM5 1a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V5a4 4 0 00-4-4H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

App.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

App.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default App;
