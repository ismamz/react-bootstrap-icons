import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const StackOverflow = forwardRef(
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
        className={['bi', 'bi-stack-overflow', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z" />
        <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z" />
      </svg>
    );
  },
);

StackOverflow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

StackOverflow.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default StackOverflow;
