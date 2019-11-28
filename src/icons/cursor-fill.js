import React from 'react';
import PropTypes from 'prop-types';

const CursorFill = (props) => {
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
        d="M16.081 4.182a.5.5 0 01.104.557l-5.657 12.727a.5.5 0 01-.917-.006L7.57 12.694l-4.766-2.042a.5.5 0 01-.006-.917L15.525 4.08a.5.5 0 01.556.103z"
        clipRule="evenodd"
      />
    </svg>
  );
};

CursorFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CursorFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CursorFill;
