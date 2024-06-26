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
