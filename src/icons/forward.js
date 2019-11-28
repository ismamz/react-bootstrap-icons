import React from 'react';
import PropTypes from 'prop-types';

const Forward = (props) => {
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
      <path
        fillRule="evenodd"
        d="M11.502 7.513a.144.144 0 00-.202.134V8.65a.5.5 0 01-.5.5H4.5v2.9h6.3a.5.5 0 01.5.5v1.003c0 .108.11.176.202.134l3.984-2.933a.522.522 0 01.042-.028.147.147 0 000-.252.523.523 0 01-.042-.028l-3.984-2.933zm-1.202.134a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.503H4a.5.5 0 01-.5-.5v-3.9a.5.5 0 01.5-.5h6.3v-.503z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Forward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Forward.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Forward;
