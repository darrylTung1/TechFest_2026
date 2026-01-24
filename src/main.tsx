import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import AuthPage from './pages/AuthPage.tsx'
import Dashboard from './pages/Dashboard.tsx'
import DNA from './pages/DNA.tsx'
import Intelligence from './pages/Intelligence.tsx'
import Roadmap from './pages/Roadmap.tsx'
import Actions from './pages/Actions.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dna" element={<DNA />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
