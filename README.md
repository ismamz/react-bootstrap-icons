# React Bootstrap Icons (alpha)

The brand new [Bootstrap Icons library](https://icons.getbootstrap.com/) to use as React components.

## Installation

```bash
npm install react-bootstrap-icons --save
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
<Camera color="royalblue" size={96} />
```

You can also include the whole icon pack:

```jsx
import React from 'react';
import * as Icon from 'react-feather';

export default function App() => {
  return <Icon.ArrowRight />
};
```
