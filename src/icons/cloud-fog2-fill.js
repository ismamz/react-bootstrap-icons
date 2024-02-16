import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudFog2Fill = forwardRef(({
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

      <path d="M8.5 3a5 5 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.5 3.5 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5 5 0 0 1 8.5 3" />
    </svg>
  );
});

CloudFog2Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

CloudFog2Fill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default CloudFog2Fill;
