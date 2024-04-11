import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignMiddle = forwardRef(
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
        className={['bi', 'bi-align-middle', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8m14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5" />
      </svg>
    );
  },
);

AlignMiddle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

AlignMiddle.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default AlignMiddle;
