import React from 'react';
import PropTypes from 'prop-types';

const SkipForward = (props) => {
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
        d="M17.5 5.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-3.248l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C2.713 14.69 2 14.345 2 13.692V6.308c0-.653.713-.998 1.233-.696L9.5 9.248v-2.94c0-.653.713-.998 1.233-.696L17 9.248V6a.5.5 0 01.5-.5zM3 6.633v6.734L8.804 10 3 6.633zm7.5 0v6.734L16.304 10 10.5 6.633z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SkipForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipForward.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SkipForward;
