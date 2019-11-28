import React from 'react';
import PropTypes from 'prop-types';

const GraphUp = (props) => {
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
      <path d="M2 2h1v16H2V2zm1 15h15v1H3v-1z" />
      <path
        fillRule="evenodd"
        d="M16.39 6.312l-4.349 5.437L9 8.707l-3.646 3.647-.708-.708L9 7.293l2.959 2.958 3.65-4.563.781.624z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12 5.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6h-3.5a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

GraphUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GraphUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default GraphUp;
