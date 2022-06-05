import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //se strict mode è attivata useeffct run twice
  <App />
)
