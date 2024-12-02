import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowDownRight = forwardRef(
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
        className={['bi', 'bi-box-arrow-down-right', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path
          fillRule="evenodd"
          d="M8.636 12.5a.5.5 0 0 1-.5.5H1.5A1.5 1.5 0 0 1 0 11.5v-10A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v6.636a.5.5 0 0 1-1 0V1.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5"
        />
        <path
          fillRule="evenodd"
          d="M16 15.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L6.146 6.854a.5.5 0 1 1 .708-.708L15 14.293V10.5a.5.5 0 0 1 1 0z"
        />
      </svg>
    );
  },
);

BoxArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

export default BoxArrowDownRight;
