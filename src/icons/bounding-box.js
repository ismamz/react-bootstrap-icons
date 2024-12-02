import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoundingBox = forwardRef(
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
        className={['bi', 'bi-bounding-box', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1-2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z" />
      </svg>
    );
  },
);

BoundingBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default BoundingBox;
