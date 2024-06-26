import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Mirror } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <Mirror
        setLighting={(isLight) => {
          console.log(isLight)
        }}
      />,
    )
  })
})
