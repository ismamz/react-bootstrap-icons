import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Inbox = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M3.81 4.063A1.5 1.5 0 0 1 4.98 3.5h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1-.78.624l-3.7-4.624a.5.5 0 0 0-.39-.188H4.98a.5.5 0 0 0-.39.188L.89 9.312a.5.5 0 1 1-.78-.624l3.7-4.625z"
      />
      <path
        fillRule="evenodd"
        d="M.125 8.67A.5.5 0 0 1 .5 8.5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124a1.5 1.5 0 0 1-1.489 1.314H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0H1.066z"
      />
    </svg>
  );
});

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Inbox.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Inbox;
