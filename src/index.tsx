import { h, render } from 'preact'
import App from './App'

declare const module: any

const mountNode = document.getElementById('app')

render(<App />, mountNode, mountNode.lastChild as Element)

if (module.hot) {
  module.hot.accept()
}
