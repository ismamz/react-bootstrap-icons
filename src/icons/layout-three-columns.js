import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LayoutThreeColumns = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M0 2.5A1.5 1.5 0 0 1 1.5 1h13A1.5 1.5 0 0 1 16 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-11zM1.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-13z"
      />
      <path fillRule="evenodd" d="M5 15V1h1v14H5zm5 0V1h1v14h-1z" />
    </svg>
  );
});

LayoutThreeColumns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayoutThreeColumns.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default LayoutThreeColumns;
