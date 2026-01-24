import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen border-r p-4 bg-white">
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dna">Career DNA</Link>
        <Link to="/intelligence">Job Intelligence</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/actions">Action Tools</Link>
      </nav>
    </div>
  )
}
