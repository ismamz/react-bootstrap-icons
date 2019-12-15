import React from 'react';
import PropTypes from 'prop-types';

const BatteryCharging = (props) => {
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
      <path d="M16.5 11.5a1.5 1.5 0 000-3v3z" />
      <path
        fillRule="evenodd"
        d="M11.585 4.568a.5.5 0 01.226.579l-1.134 3.686h1.99a.5.5 0 01.364.843l-5.334 5.667a.5.5 0 01-.842-.49l1.135-3.686H6a.5.5 0 01-.364-.843l5.333-5.667a.5.5 0 01.616-.09z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8.332 6H4a2 2 0 00-2 2v4a2 2 0 002 2h2.072l.307-1H4a1 1 0 01-1-1V8a1 1 0 011-1h3.391l.941-1zM6.45 8H4v4h1.313a1.5 1.5 0 01-.405-2.361L6.45 8zm.976 5l-.308 1H8.96l.21-.224h.001l.73-.776H8.53l-.085.09.028-.09H7.426zm1.354-1H7.733l.257-.833H6a.5.5 0 01-.364-.843l.793-.843L7.823 8h1.373l-2.039 2.167h1.51a.492.492 0 01.166.028.5.5 0 01.312.619L8.78 12zm.69 0h1.373l1.395-1.482.793-.842a.5.5 0 00-.364-.843h-1.99L10.933 8H9.887l-.166.54-.199.646a.5.5 0 00.478.647h1.51L9.47 12zm.725-5h1.046l.308-1H9.706l-.942 1h1.374l.085-.09-.028.09zm2.4-1l-.308 1H14a1 1 0 011 1v4a1 1 0 01-1 1h-2.724l-.942 1H14a2 2 0 002-2V8a2 2 0 00-2-2h-1.405zm-.378 6H14v-1.98a1.499 1.499 0 01-.241.341L12.217 12zM14 8.646V8h-.646a1.5 1.5 0 01.646.646z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatteryCharging.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BatteryCharging;
