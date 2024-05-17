import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/bt1.tsx'
import App2 from './component/bt2.tsx'
import './index.css'
import App3 from './component/bt3.tsx'
import App4 from './component/bt4.tsx'
import App5 from './component/bt5.tsx'
import App6 from './component/bt6.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
    <App5 />
    <App6 />
  </React.StrictMode>,
)
