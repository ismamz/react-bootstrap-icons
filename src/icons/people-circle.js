import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PeopleCircle = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
      <path
        fillRule="evenodd"
        d="M8 9a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
        clipRule="evenodd"
      />
    </svg>
  );
});

PeopleCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PeopleCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PeopleCircle;
