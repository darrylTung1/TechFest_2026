import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="p-8 flex-1">
        <h1 className="text-2xl font-bold">CareerOS Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="card">Career DNA</div>
          <div className="card">Job Intelligence</div>
          <div className="card">Roadmap Progress</div>
        </div>
      </main>
    </div>
  )
}
