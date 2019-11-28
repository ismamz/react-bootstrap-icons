import React from 'react';
import PropTypes from 'prop-types';

const FlagFill = (props) => {
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
        d="M5.5 3a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.762 4.558C6.735 3.909 7.348 3.5 8.5 3.5c.653 0 1.139.325 1.495.562l.032.022c.392.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.718 2.718 0 0111 11.5c-.653 0-1.139-.325-1.495-.563l-.032-.021c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 015.5 11V5a.5.5 0 01.223-.416l.04-.026z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FlagFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FlagFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FlagFill;
