import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Transparency = forwardRef(({
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

      <path d="M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5m5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714m-.733-1.269q.546.226 1.144.33l-1.474-1.474q.104.597.33 1.144m2.614.386a5.5 5.5 0 0 0 1.173-.242L4.374 7.91a6 6 0 0 0-.296 1.118zm2.157-.672q.446-.25.838-.576L5.418 6.126a6 6 0 0 0-.587.826zm1.545-1.284q.325-.39.576-.837L6.953 4.83a6 6 0 0 0-.827.587l4.6 4.602Zm1.006-1.822q.183-.562.242-1.172L9.028 4.078q-.58.096-1.118.296l3.823 3.824Zm.186-2.642a5.5 5.5 0 0 0-.33-1.144 5.5 5.5 0 0 0-1.144-.33z" />
    </svg>
  );
});

Transparency.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Transparency.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default Transparency;
