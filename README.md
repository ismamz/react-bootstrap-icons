# React Bootstrap Icons

The brand new [Bootstrap Icons library](https://icons.getbootstrap.com/) to use as React components.

> Currently v1.0.0-alpha5, **1030 icons!**

They're in alpha right now and subject to sweeping changes.

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

You can pass wathever props you want:

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
