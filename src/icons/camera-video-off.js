import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CameraVideoOff = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M1.075 3.196A2.159 2.159 0 0 0 .5 4.666v6.667c0 1.197.97 2.167 2.167 2.167h6.666c.568 0 1.084-.218 1.47-.575l-.708-.708c-.204.176-.47.283-.762.283H2.667A1.167 1.167 0 0 1 1.5 11.333V4.667c0-.292.107-.558.283-.762l-.708-.709zM10.5 8.379V4.667c0-.645-.522-1.167-1.167-1.167H5.621l-1-1h4.712c1.094 0 1.998.81 2.146 1.862l2.037-1.182c.859-.498 1.984.095 1.984 1.128v7.384c0 .482-.245.869-.594 1.093l-.79-.79a.317.317 0 0 0 .384-.303V4.308a.318.318 0 0 0-.482-.263L11.5 5.505V9.38l-1-1z" />
      <path
        fillRule="evenodd"
        d="M13.646 14.354l-12-12 .708-.708 12 12-.708.707z"
      />
    </svg>
  );
});

CameraVideoOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CameraVideoOff.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CameraVideoOff;
