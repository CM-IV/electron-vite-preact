import { render } from 'preact'
import App from './app'
import "@/assets/styles/index.css"

render(<App />, document.body)

postMessage({ payload: 'removeLoading' }, '*')