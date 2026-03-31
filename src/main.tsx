import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { auth } from './firebase'
import { onAuthStateChanged, User } from 'firebase/auth'
import AuthPage from './pages/AuthPage.tsx'
import Dashboard from './pages/Dashboard.tsx'
import DNA from './pages/DNA.tsx'
import Intelligence from './pages/Intelligence.tsx'
import Roadmap from './pages/Roadmap.tsx'
import Actions from './pages/Actions.tsx'

function RequireAuth({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined)

  useEffect(() => {
    return onAuthStateChanged(auth, setUser)
  }, [])

  if (user === undefined) return null // still loading
  if (!user) return <Navigate to="/auth" replace />
  return <>{children}</>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/dna" element={<RequireAuth><DNA /></RequireAuth>} />
        <Route path="/intelligence" element={<RequireAuth><Intelligence /></RequireAuth>} />
        <Route path="/roadmap" element={<RequireAuth><Roadmap /></RequireAuth>} />
        <Route path="/actions" element={<RequireAuth><Actions /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
