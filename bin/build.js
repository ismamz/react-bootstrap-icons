const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');
const format = require('prettier-eslint');

const iconsDir = path.join(__dirname, '../node_modules/bootstrap-icons/icons');

const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src/icons');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`;

fs.writeFileSync(
  path.join(rootDir, 'src', 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8',
);

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');

let n = 0;

fs.readdirSync(iconsDir).forEach((file) => {
  const svg = fs.readFileSync(`${iconsDir}/${file}`, 'utf8');
  const fileName = file.split('.')[0];
  const ComponentName = upperCamelCase(fileName);
  const svgContent = svg.replace(/<svg[^>]*>|<\/svg>/g, '');

  const preComponent = `
    import React, { forwardRef } from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = forwardRef(({ color, size, ...rest }, ref) => {
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
          ${svgContent}
        </svg>
      );
    });

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    ${ComponentName}.defaultProps = {
      color: 'currentColor',
      size: '1em',
    };

    export default ${ComponentName};
  `;

  const component = format({
    text: preComponent,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      singleQuote: true,
      trailingComma: 'none',
      bracketSpacing: true,
      semi: true,
      arrowParens: 'avoid',
      jsxSingleQuote: false,
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      parser: 'flow',
    },
  });

  fs.writeFileSync(path.join(rootDir, 'src/icons', `${fileName}.js`), component, 'utf-8');

  const exportString = `export { default as ${ComponentName} } from './icons/${fileName}';\r\n`;
  fs.appendFileSync(path.join(rootDir, 'src', 'index.js'), exportString, 'utf-8');

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );

  console.log(`${fileName} was created.`);
  n++;
});

console.log(`\nSuccess! ${n} icons where created.`);
