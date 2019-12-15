import React from 'react';
import PropTypes from 'prop-types';

const Type = (props) => {
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
      <path d="M4.244 15.081l.944-2.803H8.66l.944 2.803h1.257L7.54 5.75H6.322L3 15.081h1.244zm2.7-7.923l1.395 4.157h-2.83L6.91 7.158h.034zm9.146 7.027h.035v.896h1.128v-4.956c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.463v.732H14.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z" />
    </svg>
  );
};

Type.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Type.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Type;
