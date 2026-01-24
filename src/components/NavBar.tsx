import { useLocation, Link } from 'react-router-dom'

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/dna', label: 'DNA' },
  { path: '/intelligence', label: 'Intelligence' },
  { path: '/roadmap', label: 'Roadmap' },
  { path: '/actions', label: 'Actions' }
]

export default function NavBar() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/dashboard" className="logo">YourApp</Link>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
