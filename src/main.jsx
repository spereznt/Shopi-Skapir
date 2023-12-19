import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App'
import './index.css'
import Layout from './Components/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
)
