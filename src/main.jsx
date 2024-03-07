import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NewsContext } from './context/newsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsContext>
      <App />
    </NewsContext>
  </React.StrictMode>,
)
