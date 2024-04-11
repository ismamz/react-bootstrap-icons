# React Bootstrap Icons

The brand new [Bootstrap Icons library](https://icons.getbootstrap.com/) to use as React components.

> Currently v1.11.3, over **2000 icons!**

![bootstrap-icons](https://user-images.githubusercontent.com/39626451/192898250-711e2281-ab03-433a-afeb-4ad542b68a5b.png)

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
import * as Icon from 'react-bootstrap-icons';

export default function App() {
  return <Icon.ArrowRight />;
}
```

The icon names are the `PascalCase` version of the original name. For those icons whose name begins with a number, the `Icon` prefix will be used. Examples: `arrow-right` → `ArrowRight`, `1-circle` → `Icon1Circle`.

You can also create an `Icon` component and pass it the icon name as a prop:

```jsx
import * as icons from 'react-bootstrap-icons';

interface IconProps extends icons.IconProps {
  // Cannot use "name" as it is a valid SVG attribute
  // "iconName", "filename", "icon" will do it instead
  iconName: keyof typeof icons;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
}
```

```jsx
import { Icon } from './Icon';

export default function App() {
  return (
    <Icon
      iconName="Stopwatch"
      color="royalblue"
      size={96}
      className="align-top"
    />
  );
}
```

## IconProps

| Name         | Type             | Description                                    |
| ------------ | ---------------- | ---------------------------------------------- |
| `color?`     | string           | color of the icon                              |
| `size?`      | string \| number | size of the icon (`width` and `height`)        |
| `title?`     | string           | provides an accessible, short-text description |
| `className?` | string           | `bi bi-{icon-name}` and add your own classes   |

## Figma Plugin

You can install it from the Figma app: [Bootstrap Icons Plugin for Figma](https://www.figma.com/community/plugin/868341386266170307/Bootstrap-Icons)

## More options

Other ways to use Boostrap icons: [https://icons.getbootstrap.com/#usage](https://icons.getbootstrap.com/#usage)

## License

- react-bootstrap-icons are open-sourced ([MIT](https://github.com/ismamz/react-bootstrap-icons/blob/master/LICENSE.md))
- Bootstrap Icons are open-sourced ([MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)).

## Collaborators

- [@kwnath](https://github.com/kwnath)
