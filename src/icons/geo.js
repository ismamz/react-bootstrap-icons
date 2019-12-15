import React from 'react';
import PropTypes from 'prop-types';

const Geo = (props) => {
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
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M9.5 6h1v9a.5.5 0 01-1 0V6z" />
      <path
        fillRule="evenodd"
        d="M8.489 14.095a.5.5 0 01-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.383.655.245 1.593.407 2.653.407s1.998-.162 2.653-.407c.329-.124.56-.259.701-.383.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 11.212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.337-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 01.595.383z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Geo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Geo.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Geo;
