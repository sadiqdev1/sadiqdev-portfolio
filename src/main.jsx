import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ChortleCaseStudy from './pages/ChortleCaseStudy.jsx'
import ChortleBuildPost from './pages/blog/ChortleBuildPost.jsx'
import LaravelTipsPost from './pages/blog/LaravelTipsPost.jsx'
import JourneyPost from './pages/blog/JourneyPost.jsx'
import WhoIsSadiqDevPost from './pages/blog/WhoIsSadiqDevPost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hire-me" element={<ServicesPage />} />
          <Route path="/projects/chortle" element={<ChortleCaseStudy />} />
          <Route path="/blog/how-i-built-chortle" element={<ChortleBuildPost />} />
          <Route path="/blog/laravel-tips" element={<LaravelTipsPost />} />
          <Route path="/blog/my-journey" element={<JourneyPost />} />
          <Route path="/blog/who-is-sadiqdev1" element={<WhoIsSadiqDevPost />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
