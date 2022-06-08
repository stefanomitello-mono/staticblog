import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //se strict mode è attivata useeffct run twice
  <App />
)
