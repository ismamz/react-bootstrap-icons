import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileMusicFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM8.725 3.793A1 1 0 0 0 8 4.754V10.2a2.52 2.52 0 0 0-1-.2c-1.105 0-2 .672-2 1.5S5.895 13 7 13s2-.672 2-1.5V6.714L11.5 6V4.326a1 1 0 0 0-1.275-.962l-1.5.429z"
      />
    </svg>
  );
});

FileMusicFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileMusicFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileMusicFill;
