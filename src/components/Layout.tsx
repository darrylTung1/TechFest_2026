import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.tsx'

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}
