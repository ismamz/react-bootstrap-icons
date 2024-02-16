import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RecordBtnFill = forwardRef(({
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

      <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  );
});

RecordBtnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

RecordBtnFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default RecordBtnFill;
