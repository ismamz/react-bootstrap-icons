# React Bootstrap Icons

The brand new [Bootstrap Icons library](https://icons.getbootstrap.com/) to use as React components.

> Currently v1.9.1, over **1600 icons!**

<img src="https://api.framer.com/store/assets/ismael/bootstrap-icons/artwork.png?ODhmNDI">

## Installation

```bash
npm install react-bootstrap-icons --save
```

or

```bash
yarn add react-bootstrap-icons
```

## Usage

```jsx
import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

export default function App() {
  return <ArrowRight />;
}
```

Icons can be configured with inline props:

```jsx
<ArrowRight color="royalblue" size={96} />
```

You can pass whatever props you want:

```jsx
<ArrowRight className="ml-4" />
```

You can also include the whole icon pack:

```jsx
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function App() => {
  return <Icon.ArrowRight />
};
```

The icon names are the `PascalCase` version of the original name. For those icons whose name begins with a number, the `Icon` prefix will be used. Examples: `arrow-right` → `ArrowRight`, `1-circle` → `Icon1Circle`.

You can also create an "Icon" component and pass it the icon name as a prop:

```jsx
import * as icons from 'react-bootstrap-icons';

interface IconProps extends icons.IconProps {
  // Cannot use "name" as it is a valid SVG attribute
  // "iconName", "filename", "icon"... will do it instead
  iconName: keyof typeof icons;
}

export const Icon = ({iconName, ...props}: IconProps) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
}
```

```jsx
import { Icon } from './Icon';
...
<Icon iconName="Stopwatch" color="royalblue" size={96} className="align-top" />
...
```

## IconProps

|Name|Type|Description|
|---|---|---|
|color?|string|color of the icon|
|size?|string \| number |size of the icon|
|title?|string|acts kind of like img alt="" and/or div title=""|

## Figma Plugin

You can install it from the Figma app: [Bootstrap Icons Plugin for Figma](https://www.figma.com/community/plugin/868341386266170307/Bootstrap-Icons)

## More options

Other ways to use Boostrap icons: [https://icons.getbootstrap.com/#usage](https://icons.getbootstrap.com/#usage)

## License

- react-bootstrap-icons are open sourced ([MIT](https://github.com/ismamz/react-bootstrap-icons/blob/master/LICENSE.md))
- Bootstrap Icons are open-sourced ([MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)](https://github.com/twbs/icons/blob/main/LICENSE.md)).

## Collaborators

- [@kwnath](https://github.com/kwnath)