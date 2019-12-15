import React from 'react';
import PropTypes from 'prop-types';

const Hammer = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M11.812 3.952a.5.5 0 01-.312.89c-1.671 0-2.852.596-3.616 1.185L6.857 7.073V8.21a.5.5 0 01-.146.354L5.426 9.853a.5.5 0 01-.709 0L2.146 7.274a.5.5 0 010-.706l1.286-1.29a.5.5 0 01.354-.146H4.84c1.664-1.904 3.375-2.27 4.716-2.091a5.008 5.008 0 012.076.782l.18.129z" />
      <path
        fillRule="evenodd"
        d="M8.012 5.5a.5.5 0 01.359.165l9.146 8.646A.5.5 0 0117.5 15L16 16.5a.5.5 0 01-.756-.056L6.598 7.297a.5.5 0 01.048-.65l1-1a.5.5 0 01.366-.147z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Hammer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hammer.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Hammer;
