import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SignIntersectionYFill = forwardRef(
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
        className={['bi', 'bi-sign-intersection-y-fill', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm1.443 4.762 1.014 1.106L8.75 8.83V12h-1.5V8.83L4.493 6.303l1.014-1.106L8 7.483z" />
      </svg>
    );
  },
);

SignIntersectionYFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

SignIntersectionYFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default SignIntersectionYFill;
