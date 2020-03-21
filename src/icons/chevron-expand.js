import React from 'react';
import PropTypes from 'prop-types';

const ChevronExpand = (props) => {
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
        d="M3.646 9.146a.5.5 0 01.708 0L8 12.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zm0-2.292a.5.5 0 00.708 0L8 3.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronExpand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronExpand.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ChevronExpand;
