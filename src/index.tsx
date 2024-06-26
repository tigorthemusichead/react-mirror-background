import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Mirror } from 'react-mirror-background'

const Example: React.FC = () => {
  const [isThemeLight, setIsThemeLight] = useState(true)
  console.log(isThemeLight)
  return (
    <main style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      gap: '20px'
    }}>
      <div style={{ background: isThemeLight ? '#000000' : '#FFFFFF', width: '5px', height: '200vh', marginTop: '20px' }}>

      </div>
      <div>
        <Mirror setLighting={setIsThemeLight} />
        <h1
          style={{ color: isThemeLight ? '#000000' : '#FFFFFF' }}
        >
          React Mirror Background Demo
        </h1>
        <div>
          <a
            href="https://github.com/tigorthemusichead/react-mirror-background"
            style={{ color: isThemeLight ? '#050505' : '#FAFAFA' }}
          >
            Github
          </a>
        </div>
        <div>
          <a
            href="https://www.npmjs.com/package/react-mirror-background"
            style={{ color: isThemeLight ? '#050505' : '#FAFAFA' }}
          >
            NPM
          </a>
        </div>
      </div>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
)
