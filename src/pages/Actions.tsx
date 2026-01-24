export default function Actions() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="p-8 flex-1">
        <h1 className="text-2xl font-bold mb-4">Action Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">Resume Builder</div>
          <div className="card">Application Tracker</div>
          <div className="card">Networking Tracker</div>
        </div>
      </main>
    </div>
  )
}
