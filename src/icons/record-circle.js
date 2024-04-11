import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RecordCircle = forwardRef(
  ({
    color, size, title, className, ...rest
  }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill={color}
        className={['bi', 'bi-record-circle', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      </svg>
    );
  },
);

RecordCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

RecordCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default RecordCircle;
