import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SignNoRightTurnFill = forwardRef(
  ({
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

        <path d="M14 13.292A8 8 0 0 0 2.707 2l4.097 4.098C7.025 6.034 7.259 6 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658a.265.265 0 0 1-.026.02L14 13.291Zm-.708.708A8 8 0 0 1 2 2.707l3.885 3.884A2.495 2.495 0 0 0 5 8.5V11h1V8.5c0-.489.234-.923.596-1.197l6.696 6.696Z" />
        <path d="M7.707 7 9 8.293V7H7.707Z" />
      </svg>
    );
  },
);

SignNoRightTurnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

SignNoRightTurnFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default SignNoRightTurnFill;
