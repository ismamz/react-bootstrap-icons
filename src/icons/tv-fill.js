import React from 'react';
import PropTypes from 'prop-types';

const TvFill = (props) => {
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
        d="M4.5 15.5A.5.5 0 015 15h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinejoin="round"
        d="M4 4.5h12.006l.044.003a1.958 1.958 0 01.726.195c.191.095.367.23.495.423.127.19.229.466.229.879v6.006l-.003.044a1.959 1.959 0 01-.195.726c-.095.191-.23.367-.423.495-.19.127-.466.229-.879.229H4.003h0-.01l-.044-.003a1.96 1.96 0 01-.726-.195 1.256 1.256 0 01-.495-.423c-.127-.19-.229-.466-.229-.879V6.003v0-.009l.003-.044a1.959 1.959 0 01.195-.726c.095-.191.23-.367.423-.495.19-.127.466-.229.879-.229zM2.216 6H2h.216zm13.782-1.5h0zm-11.995 9s0 0 0 0h0z"
      />
    </svg>
  );
};

TvFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TvFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TvFill;
