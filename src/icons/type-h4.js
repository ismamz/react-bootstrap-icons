import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TypeH4 = forwardRef(({
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

      <path d="M13.007 3H15v10h-1.29v-2.051H8.854v-1.18C10.1 7.513 11.586 5.256 13.007 3Zm-2.82 6.777h3.524v-5.62h-.074a95.078 95.078 0 0 0-3.45 5.554v.066ZM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13h1.32Z" />
    </svg>
  );
});

TypeH4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

TypeH4.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default TypeH4;
