import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChatRightQuoteFill = forwardRef(
  ({
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

        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM7.194 4.766q.13.188.227.401c.428.948.393 2.377-.942 3.706a.446.446 0 0 1-.612.01.405.405 0 0 1-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667S4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324q.128.125.227.272M11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666S9.112 4 10.069 4c.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324q.128.125.227.272.131.188.228.401c.428.948.392 2.377-.942 3.706a.446.446 0 0 1-.613.01.405.405 0 0 1-.011-.59c.42-.416.672-.831.81-1.22z" />
      </svg>
    );
  },
);

ChatRightQuoteFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

ChatRightQuoteFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default ChatRightQuoteFill;
