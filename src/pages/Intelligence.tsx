const roles = [
  { role: 'Data Analyst', skills: ['SQL', 'Excel', 'Python'], salary: '3k-5k' },
  { role: 'UX Designer', skills: ['Figma', 'UX', 'Research'], salary: '3k-5k' },
]

export default function Intelligence() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="p-8 flex-1">
        <h1 className="text-2xl font-bold mb-4">Job Intelligence</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map(r => (
            <div key={r.role} className="card">
              <h3 className="font-semibold">{r.role}</h3>
              <p className="text-sm text-gray-600">{r.salary}</p>
              <p className="text-sm">{r.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
