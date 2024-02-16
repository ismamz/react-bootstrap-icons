import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronContract = forwardRef(({
  color, size, title, ...rest
}, ref) => {
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
      {title ? <title>{title}</title> : null}

      <path
        fillRule="evenodd"
        d="M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708m0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
});

ChevronContract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

ChevronContract.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default ChevronContract;
