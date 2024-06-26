# my-react-typescript-package

[![NPM version][npm-image]][npm-url]

[**Live Demo**](https://tigorthemusichead.github.io/react-mirror-background/)

## Installation:

```bash
npm install react-mirror-background --save-dev
```

or

```bash
yarn add -D react-mirror-background
```

## Usage :

Add `Mirror` to your component:

```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Mirror } from 'react-mirror-background'

const Example: React.FC = () => {
  const [isThemeLight, setIsThemeLight] = useState(true)
  return (
    <>
      <Mirror setLighting={setIsThemeLight} />
      <h1 style={{ color: isThemeLight ? '#000000' : '#FFFFFF' }}>Hello world</h1>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/react-mirror-background/
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package