import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RecordFill = forwardRef(
  (
    {
      color = 'currentColor',
      size = '1em',
      title = null,
      className = '',
      ...rest
    },
    ref,
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill={color}
        className={['bi', 'bi-record-fill', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
      </svg>
    );
  },
);

RecordFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default RecordFill;
