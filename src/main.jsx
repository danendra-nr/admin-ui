import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import TemplateCenter from './latihan/templates/TemplateCenter.jsx'
import PageRegister from './latihan/pages/PageRegister.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemplateCenter>
      <PageRegister />
    </TemplateCenter>
  </StrictMode>,
)
