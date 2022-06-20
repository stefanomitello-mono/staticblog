import React from 'react'
import { hydrate } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HeadProvider } from 'react-head'
import './global.scss'
import App from './App'

hydrate(
    <HeadProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HeadProvider>,
    document.getElementById('root')
)