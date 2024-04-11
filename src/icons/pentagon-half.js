import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PentagonHalf = forwardRef(
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
        className={['bi', 'bi-pentagon-half', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="m8 1.288 6.578 5.345a.5.5 0 0 1 .161.539l-2.362 7.479a.5.5 0 0 1-.476.349H8zm7.898 5.536a.5.5 0 0 0-.162-.538L8.316.256a.5.5 0 0 0-.631 0L.264 6.286a.5.5 0 0 0-.162.538l2.788 8.827a.5.5 0 0 0 .476.349h9.268a.5.5 0 0 0 .476-.35z" />
      </svg>
    );
  },
);

PentagonHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  className: PropTypes.string,
};

PentagonHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
  className: '',
};

export default PentagonHalf;
