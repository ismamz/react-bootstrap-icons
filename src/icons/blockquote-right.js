import React from 'react';
import PropTypes from 'prop-types';

const BlockquoteRight = (props) => {
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
        d="M4 5.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
      <path d="M14.338 8c.768.176 1.5.855 1.5 1.799 0 .633-.316 1.078-.815 1.078-.498 0-.773-.445-.773-.961.48-.035.826-.334.826-.768 0-.445-.363-.773-.838-.908l.1-.24zM12.1 8c.767.176 1.5.855 1.5 1.799 0 .633-.317 1.078-.815 1.078-.498 0-.773-.445-.773-.961.474-.035.82-.334.82-.768 0-.445-.357-.773-.832-.908l.1-.24z" />
    </svg>
  );
};

BlockquoteRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BlockquoteRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BlockquoteRight;
