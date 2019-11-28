import React from 'react';
import PropTypes from 'prop-types';

const ReplyAll = (props) => {
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
        d="M10.002 7.013a.144.144 0 00-.202.134V8.3a.5.5 0 01-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876 1.02-.983 2.185-1.516 3.205-1.799a8.745 8.745 0 011.921-.306 7.47 7.47 0 01.798.008h.013l.005.001h.001L9.3 11.9l.05-.498a.5.5 0 01.45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.522.522 0 01.042-.028.147.147 0 000-.252.51.51 0 01-.042-.028l-3.984-2.933zM8.8 12.386a7.745 7.745 0 00-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 01-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.667z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.868 6.293a.5.5 0 01.7-.106l3.993 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a.5.5 0 11-.593-.805l4.012-2.954a.523.523 0 01.042-.028.147.147 0 000-.252.512.512 0 01-.042-.028l-4.012-2.954a.5.5 0 01-.106-.699z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReplyAll.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReplyAll.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ReplyAll;
