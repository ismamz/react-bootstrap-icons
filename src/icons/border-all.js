import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BorderAll = forwardRef(({
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

      <path d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z" />
    </svg>
  );
});

BorderAll.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

BorderAll.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default BorderAll;
