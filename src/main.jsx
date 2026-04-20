import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ChortleCaseStudy from './pages/ChortleCaseStudy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hire-me" element={<ServicesPage />} />
        <Route path="/projects/chortle" element={<ChortleCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
